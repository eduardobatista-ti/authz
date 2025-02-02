import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersEntity } from 'src/entities/users.entity';
import { compareSync } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  async findAllManagers() {
    return this.userRepository.find({
      where: { userRole: 'manager' },
      select: ['id', 'firstName', 'lastName', 'email', 'userRole', 'status'],
    });
  }

  async FindOneOrFail(options: FindOneOptions<UsersEntity>) {
    try {
      return this.userRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // async store(data: CreateUserDto) {
  //   const user = this.userRepository.create(data);
  //   return await this.userRepository.save(user);
  // }

  async register(data: CreateUserDto): Promise<UsersEntity> {
    const existingUser = await this.userRepository.findOne({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ConflictException('Username already exists');
    }
    return this.userRepository.save(data);
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.userRepository.findOneOrFail({ where: { id } });
    this.userRepository.merge(user, data);
    return await this.userRepository.save(user);
  }

  async destroy(id: number) {
    await this.userRepository.findOneOrFail({ where: { id } });
    this.userRepository.softDelete({ id });
  }

  async findOne(email: string): Promise<UsersEntity> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async validateUser(AuthDto): Promise<UsersEntity> {
    const user = await this.userRepository.findOne({
      where: { email: AuthDto.email },
    });

    if (!user || !compareSync(AuthDto.password, user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }
}

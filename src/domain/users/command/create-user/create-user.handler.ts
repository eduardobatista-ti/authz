import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { InternalServerErrorException } from '@nestjs/common';
import { UsersEntity } from 'src/entities/users.entity';
import { CreateUserDto } from '../../dto/create-user.dto';

@CommandHandler(CreateUserDto)
export class CreateUserHandler
  implements ICommandHandler<CreateUserDto, number>
{
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async execute(command: CreateUserDto): Promise<number> {
    try {
      return await this.dataSource.transaction(async (db) => {
        const user = db.create(UsersEntity, {
          ...command,
          status: 'active',
          userRole: 'manager',
        });

        await db.save(user);

        return user.id;
      });
    } catch (error) {
      console.error('Error creating new user', error);
      throw new InternalServerErrorException('Error creating new user');
    }
  }
}

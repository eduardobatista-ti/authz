import { UsersEntity } from "../entities/users.entity";
import { FindOneOptions, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UsersEntity>);
    FindAll(): Promise<UsersEntity[]>;
    FindOneOrFail(options: FindOneOptions<UsersEntity>): Promise<UsersEntity>;
    store(data: CreateUserDto): Promise<UsersEntity>;
    update(id: number, data: UpdateUserDto): Promise<UsersEntity>;
    destroy(id: number): Promise<void>;
    findOne(email: string): Promise<UsersEntity>;
}

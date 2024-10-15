import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    index(): Promise<import("../entities/users.entity").UsersEntity[]>;
    store(body: CreateUserDto): Promise<import("../entities/users.entity").UsersEntity>;
    show(id: number): Promise<import("../entities/users.entity").UsersEntity>;
    update(id: number, body: UpdateUserDto): Promise<import("../entities/users.entity").UsersEntity>;
    destroy(id: number): Promise<void>;
}

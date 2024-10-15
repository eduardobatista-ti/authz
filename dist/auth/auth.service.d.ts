import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/app/users/users.service";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    signIn(email: string): Promise<any>;
}

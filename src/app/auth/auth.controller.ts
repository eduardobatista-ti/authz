import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";
import { Public } from "./constants";

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {}

  @Public()
  @Post("login")
  async login(
    @Body("email") email: string,
    @Body("password") password: string
  ) {
    const user = await this.userService.validateUser(email, password);
    return this.authService.login(user);
  }
}

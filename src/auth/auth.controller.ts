import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './constants';
import { UsersService } from 'src/domain/users/users.service';
import { AuthDto } from './dto/auth.dto';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @Public()
  @Post('login')
  async login(@Body() body: AuthDto) {
    const user = await this.userService.validateUser(body);
    return this.authService.login(user);
  }
}

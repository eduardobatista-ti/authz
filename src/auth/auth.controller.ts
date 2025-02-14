import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './constants';
import { UsersService } from 'src/domain/users/users.service';
import { AuthDto } from './dto/auth.dto';
import { UsersEntity } from 'src/entities/users.entity';

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

  @Get('me')
  async find(@Request() req): Promise<UsersEntity> {
    try {
      return await this.userService.findMe(req.user.id);
    } catch (error) {
      console.error('Error:', error);
      throw new error();
    }
  }
}

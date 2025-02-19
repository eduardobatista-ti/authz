import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersEntity } from '../entities/users.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: UsersEntity) {
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.userRole,
    };
    return {
      access_token: this.jwtService.sign(payload),
      id: user.id,
      email: user.email,
      role: user.userRole,
      status: user.status,
    };
  }
}

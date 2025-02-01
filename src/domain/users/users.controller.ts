import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserCommand } from './command/create-user/create-user.command';
import { CommandBus } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { Public } from 'src/auth/constants';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly commandBus: CommandBus,
  ) {}

  @Public()
  @Get()
  async index() {
    return this.usersService.FindAll();
  }

  @Public()
  @Post()
  async store(@Body() body: CreateUserDto) {
    const command = plainToInstance(CreateUserCommand, body);
    return await this.commandBus.execute(command);
  }

  @Get(':id')
  async show(@Param('id') id: number) {
    return await this.usersService.FindOneOrFail({ where: { id } });
  }

  @Put(':id')
  async update(@Param('id') id: number, body: UpdateUserDto) {
    return await this.usersService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id') id: number) {
    await this.usersService.destroy(id);
  }
}

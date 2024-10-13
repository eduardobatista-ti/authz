import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
        @Get()
        async index() {
            return this.usersService.FindAll();  
        }
        @Post()
        async store(@Body() body: CreateUserDto) {
            return await this.usersService.store(body);
        }
        @Get(':id')
        async show(@Param('id') id:number) {
            return await this.usersService.FindOneOrFail({ where: { id } }); 
        }

        @Put(':id')
        async update(@Param('id') id: number , body:UpdateUserDto) {
            return await this.usersService.update(id, body);
        }

        @Delete(':id')
        async destroy(@Param('id') id:number) {
            await this.usersService.destroy(id);
        }
}

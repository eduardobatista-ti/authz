import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/entities/users.entity';
import { CreateUserHandler } from './command/create-user/create-user.handler';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UsersController],
  providers: [UsersService, CreateUserHandler],
  exports: [UsersService],
})
export class UsersModule {}

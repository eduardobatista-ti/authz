import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { InternalServerErrorException } from '@nestjs/common';
import { UsersEntity } from 'src/entities/users.entity';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler
  implements ICommandHandler<CreateUserCommand, number>
{
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async execute(command: CreateUserCommand): Promise<number> {
    try {
      return await this.dataSource.transaction(async (db) => {
        const user = db.create(UsersEntity, command ?? {});

        await db.save(user);

        return user.id;
      });
    } catch {
      throw new InternalServerErrorException('Error creating new user');
    }
  }
}

import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'O primeiro nome é obrigatório.' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'O sobrenome é obrigatório.' })
  lastName: string;

  @IsEmail({}, { message: 'O e-mail deve ser válido.' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'O CEP é obrigatório.' })
  zipCode: string;

  @IsString()
  @IsNotEmpty({ message: 'O estado é obrigatório.' })
  state: string;

  @IsString()
  @IsNotEmpty({ message: 'A cidade é obrigatória.' })
  city: string;

  @IsString()
  @IsNotEmpty({ message: 'O bairro é obrigatório.' })
  neighborhood: string;

  @IsString()
  @IsNotEmpty({ message: 'A rua é obrigatória.' })
  street: string;

  @IsString()
  @IsNotEmpty({ message: 'O número é obrigatório.' })
  number: string;

  @IsString()
  @IsOptional()
  complement?: string;
}

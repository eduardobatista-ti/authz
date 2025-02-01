export class CreateUserCommand {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  userRole: 'manager';
  zipCode: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement?: string;
}

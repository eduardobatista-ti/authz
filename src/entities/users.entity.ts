import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { hashSync } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { Exclude } from 'class-transformer';

@Entity('users')
export class UsersEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'image_path', nullable: true })
  imagePath: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Exclude()
  @Column()
  status: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'user_role' })
  userRole: string;

  @Column({ name: 'zip_code' })
  zipCode: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column({ nullable: true })
  complement: string;

  @Exclude()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @Exclude()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @Exclude()
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @BeforeInsert()
  generateIdAndHashPassword() {
    if (!this.id) {
      this.id = uuidv4();
    }
    this.password = hashSync(this.password, 10);
  }
}

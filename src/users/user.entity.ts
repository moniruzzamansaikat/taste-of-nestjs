import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  status: number;

  @Column()
  balance: number;
}
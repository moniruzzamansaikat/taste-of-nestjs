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

  @Column({
    default: 1,
    type: 'tinyint',
  })
  status: number;

  @Column({
    default: 0,
    type: 'decimal'
  })
  balance: number;
}
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ nullable: true })
  password: string;
  @Column()
  createdAt: Date;
  @Column()
  changedAt: Date;
  @Column({ nullable: true })
  hashed_password: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ingredient' })
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  status: string;
  @Column()
  quantity: number;
  @Column()
  expireDate: Date;
  @Column()
  createdAt: Date;
  @Column()
  changedAt: Date;
}

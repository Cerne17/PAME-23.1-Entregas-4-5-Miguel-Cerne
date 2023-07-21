import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  quantity: number;
  @Column()
  @ManyToMany(() => Ingredient, (ingredient) => ingredient.products)
  @JoinTable()
  ingredients: Ingredient[];
  @Column()
  expireDate: Date;
  @Column()
  productionDate: Date;
  @Column()
  createdAt: Date;
  @Column()
  changedAt: Date;
}

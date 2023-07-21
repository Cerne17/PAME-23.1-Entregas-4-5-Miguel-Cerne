import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  @ManyToMany(() => Product, (product) => product.ingredients)
  products: Product[];
  @Column()
  expireDate: Date;
  @Column()
  createdAt: Date;
  @Column()
  changedAt: Date;
}

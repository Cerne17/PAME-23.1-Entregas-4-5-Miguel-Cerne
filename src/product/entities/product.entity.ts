import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  quantity: number;
  @Column()
  expireDate: Date;
  @Column()
  productionDate: Date;
  @Column()
  createdAt: Date;
  @Column()
  changedAt: Date;
}

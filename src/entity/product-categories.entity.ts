import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Products } from './products.entity';

@Entity()
export class ProductCategories {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({ length: 100, unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => Products, (product) => product.category)
  products: Products[];
}

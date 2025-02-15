import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Companies } from './companies.entity';
import { InventoryMovements } from './inventory-movements.entity';
import { ProductCategories } from './product-categories.entity';
import { Stock } from './stock.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ length: 50, unique: true })
  product_code: string;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  purchase_price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  sale_price: number;

  @ManyToOne(() => ProductCategories, (category) => category.products, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: ProductCategories;

  @ManyToOne(() => Companies, (company) => company.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: Companies;

  @OneToMany(() => InventoryMovements, (movement) => movement.product)
  movements: InventoryMovements[];

  @OneToMany(() => Stock, (stock) => stock.product)
  stock: Stock[];
}

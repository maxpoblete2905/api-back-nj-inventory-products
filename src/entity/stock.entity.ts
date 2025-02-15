import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Products } from './products.entity';
import { Warehouses } from './warehouses.entity';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  stock_id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Products, (product) => product.stock, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: Products;

  @ManyToOne(() => Warehouses, (warehouse) => warehouse.stock, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'warehouse_id' })
  warehouse: Warehouses;
}

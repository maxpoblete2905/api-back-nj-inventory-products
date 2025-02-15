import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Products } from './products.entity';
import { Warehouses } from './warehouses.entity';
import { Companies } from './companies.entity';

@Entity()
export class InventoryMovements {
  @PrimaryGeneratedColumn()
  movement_id: number;

  @CreateDateColumn()
  movement_date: Date;

  @Column({ type: 'enum', enum: ['in', 'out', 'adjustment'] })
  movement_type: 'in' | 'out' | 'adjustment';

  @Column()
  quantity: number;

  @ManyToOne(() => Products, (product) => product.movements, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: Products;

  @ManyToOne(() => Warehouses, (warehouse) => warehouse.movements, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'warehouse_id' })
  warehouse: Warehouses;

  @ManyToOne(() => Companies, (company) => company.movements, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: Companies;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Branches } from './branches.entity';
import { InventoryMovements } from './inventory-movements.entity';
import { Stock } from './stock.entity';

@Entity()
export class Warehouses {
  @PrimaryGeneratedColumn()
  warehouse_id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 200 })
  address: string;

  @ManyToOne(() => Branches, (branch) => branch.warehouses, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'branch_id' })
  branch: Branches;

  @OneToMany(() => InventoryMovements, (movement) => movement.warehouse)
  movements: InventoryMovements[];

  @OneToMany(() => Stock, (stock) => stock.warehouse)
  stock: Stock[];
}

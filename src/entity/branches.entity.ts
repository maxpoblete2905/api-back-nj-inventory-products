import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Warehouses } from './warehouses.entity';
import { Companies } from './companies.entity';

@Entity()
export class Branches {
  @PrimaryGeneratedColumn()
  branch_id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 200 })
  address: string;

  @ManyToOne(() => Companies, (company) => company.branches, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: Companies;

  @OneToMany(() => Warehouses, (warehouse) => warehouse.branch)
  warehouses: Warehouses[];
}

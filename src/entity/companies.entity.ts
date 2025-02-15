import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Products } from './products.entity';
import { InventoryMovements } from './inventory-movements.entity';
import { Branches } from './branches.entity'; // Importa la entidad Branches

@Entity()
export class Companies {
  @PrimaryGeneratedColumn()
  company_id: number;

  @Column({ length: 100, unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => Products, (product) => product.company)
  products: Products[];

  @OneToMany(() => InventoryMovements, (movement) => movement.company)
  movements: InventoryMovements[];

  @OneToMany(() => Branches, (branch) => branch.company) // Relación con Branches
  branches: Branches[];
}

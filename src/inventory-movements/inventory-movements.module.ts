import { Module } from '@nestjs/common';
import { InventoryMovementsService } from './inventory-movements.service';
import { InventoryMovementsController } from './inventory-movements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryMovements } from '../entity/inventory-movements.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryMovements])],
  providers: [InventoryMovementsService],
  controllers: [InventoryMovementsController],
})
export class InventoryMovementsModule {}

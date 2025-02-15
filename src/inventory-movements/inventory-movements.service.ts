import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventoryMovements } from '../entity/inventory-movements.entity';
import { CreateInventoryMovementDto } from './dto/create-inventory-movement.dto';

@Injectable()
export class InventoryMovementsService {
  constructor(
    @InjectRepository(InventoryMovements)
    private inventoryMovementsRepository: Repository<InventoryMovements>,
  ) {}

  // Register an inventory movement
  async registerMovement(
    createInventoryMovementDto: CreateInventoryMovementDto,
  ): Promise<InventoryMovements> {
    try {
      if (
        !createInventoryMovementDto ||
        Object.keys(createInventoryMovementDto).length === 0
      ) {
        throw new BadRequestException(
          'Los datos del movimiento son requeridos',
        );
      }

      const movement = this.inventoryMovementsRepository.create(
        createInventoryMovementDto,
      );
      return await this.inventoryMovementsRepository.save(movement);
    } catch (error) {
      console.error('Error al registrar movimiento de inventario:', error);
      throw new InternalServerErrorException(
        'No se pudo registrar el movimiento de inventario',
      );
    }
  }
  // Get all movements for a product
  async getMovementsByProduct(
    productId: number,
  ): Promise<InventoryMovements[]> {
    try {
      if (!productId || isNaN(productId)) {
        throw new NotFoundException('El ID del producto no es válido');
      }

      const movements = await this.inventoryMovementsRepository.find({
        where: { product: { product_id: productId } },
        relations: ['product'],
      });

      if (!movements.length) {
        throw new NotFoundException(
          `No se encontraron movimientos para el producto con ID ${productId}`,
        );
      }

      return movements;
    } catch (error) {
      console.error('Error al obtener movimientos del producto:', error);
      throw new InternalServerErrorException(
        'Ocurrió un error al recuperar los movimientos del inventario',
      );
    }
  }
}

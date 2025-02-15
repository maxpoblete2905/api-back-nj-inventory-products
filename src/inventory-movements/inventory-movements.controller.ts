import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { InventoryMovementsService } from './inventory-movements.service';
import { CreateInventoryMovementDto } from './dto/create-inventory-movement.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Inventory Movements') // Categoría en Swagger
@Controller('inventory-movements')
export class InventoryMovementsController {
  constructor(
    private readonly inventoryMovementsService: InventoryMovementsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Registrar un movimiento de inventario' })
  @ApiBody({ type: CreateInventoryMovementDto })
  @ApiResponse({
    status: 201,
    description: 'Movimiento registrado exitosamente',
  })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  async registerMovement(
    @Body() createInventoryMovementDto: CreateInventoryMovementDto,
  ) {
    return this.inventoryMovementsService.registerMovement(
      createInventoryMovementDto,
    );
  }

  @Get('product/:id')
  @ApiOperation({
    summary: 'Obtener movimientos de inventario por ID de producto',
  })
  @ApiParam({ name: 'id', type: Number, description: 'ID del producto' })
  @ApiResponse({
    status: 200,
    description: 'Lista de movimientos obtenida con éxito',
  })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  async getMovementsByProduct(@Param('id') productId: number) {
    return this.inventoryMovementsService.getMovementsByProduct(productId);
  }
}

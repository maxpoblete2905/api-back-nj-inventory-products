import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsPositive } from 'class-validator';

export class CreateInventoryMovementDto {
  @ApiProperty({
    example: 'in',
    description:
      'Tipo de movimiento del inventario. Puede ser "in", "out" o "adjustment".',
  })
  @IsEnum({ in: 'in', out: 'out', adjustment: 'adjustment' })
  movement_type: 'in' | 'out' | 'adjustment';

  @ApiProperty({
    example: 1,
    description: 'ID del producto relacionado con el movimiento',
  })
  @IsInt()
  product_id: number;

  @ApiProperty({
    example: 1,
    description: 'ID del almacén donde se realiza el movimiento',
  })
  @IsInt()
  warehouse_id: number;

  @ApiProperty({
    example: 10,
    description: 'Cantidad de productos en el movimiento',
  })
  @IsInt()
  @IsPositive()
  quantity: number;

  @ApiProperty({
    example: 1,
    description: 'ID de la empresa que realiza el movimiento',
  })
  @IsInt()
  company_id: number;
}

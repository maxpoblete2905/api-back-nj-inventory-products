import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsInt,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'P00123', description: 'Código único del producto' })
  @IsString()
  product_code: string;

  @ApiProperty({
    example: 'Laptop Dell XPS 13',
    description: 'Nombre del producto',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Laptop con procesador Intel Core i7',
    description: 'Descripción del producto',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 750.5, description: 'Precio de compra del producto' })
  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })
  @IsPositive()
  purchase_price: number;

  @ApiProperty({ example: 999.99, description: 'Precio de venta del producto' })
  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })
  @IsPositive()
  sale_price: number;

  @ApiProperty({ example: 1, description: 'ID de la categoría del producto' })
  @IsInt()
  @IsPositive()
  category_id: number;

  @ApiProperty({
    example: 1,
    description: 'ID de la empresa propietaria del producto',
  })
  @IsInt()
  @IsPositive()
  company_id: number;
}

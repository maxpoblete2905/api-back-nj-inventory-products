import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsDecimal,
  IsInt,
  IsPositive,
} from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({
    example: 'P00123',
    description: 'Código único del producto',
    required: false,
  })
  @IsOptional()
  @IsString()
  product_code?: string;

  @ApiProperty({
    example: 'Laptop Dell XPS 13',
    description: 'Nombre del producto',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: 'Laptop con procesador Intel Core i7',
    description: 'Descripción del producto',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 750.5,
    description: 'Precio de compra del producto',
    required: false,
  })
  @IsOptional()
  @IsDecimal()
  @IsPositive()
  purchase_price?: number;

  @ApiProperty({
    example: 999.99,
    description: 'Precio de venta del producto',
    required: false,
  })
  @IsOptional()
  @IsDecimal()
  @IsPositive()
  sale_price?: number;

  @ApiProperty({
    example: 1,
    description: 'ID de la categoría del producto',
    required: false,
  })
  @IsOptional()
  @IsInt()
  category_id?: number;

  @ApiProperty({
    example: 1,
    description: 'ID de la empresa propietaria del producto',
    required: false,
  })
  @IsOptional()
  @IsInt()
  company_id?: number;
}

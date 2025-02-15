import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entity/products.entity';
import { Companies } from './entity/companies.entity';
import { ProductCategories } from './entity/product-categories.entity';
import { Branches } from './entity/branches.entity';
import { Warehouses } from './entity/warehouses.entity';
import { InventoryMovements } from './entity/inventory-movements.entity';
import { Stock } from './entity/stock.entity';
import { ProductsModule } from './products/products.module';
import { InventoryMovementsModule } from './inventory-movements/inventory-movements.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Change to your MariaDB username
      password: 'E#8S?9g)qQS=FfK', // Change to your MariaDB password
      database: 'inventory_service', // Database name
      entities: [
        Companies,
        ProductCategories,
        Products,
        Branches,
        Warehouses,
        InventoryMovements,
        Stock,
      ],
      synchronize: true, // Warning: Only for development, not for production
    }),
    ProductsModule,
    InventoryMovementsModule,
  ],
})
export class AppModule {}

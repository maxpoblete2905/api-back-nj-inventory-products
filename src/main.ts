import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Orígenes permitidos
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Encabezados permitidos
    credentials: true, // Habilitar credenciales (cookies, auth headers, etc.)
  });

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Inventario')
    .setDescription(
      'API para gestionar el inventario de productos. Permite realizar operaciones CRUD sobre productos, categorías, proveedores y más.',
    )
    .setVersion('1.0')
    .setContact(
      'Juan Pérez',
      'https://www.ejemplo.com',
      'juan.perez@ejemplo.com',
    ) // Aquí puedes poner el nombre, la página y el correo del creador
    .addBearerAuth() // Si usas autenticación
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // Ruta para ver la doc

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

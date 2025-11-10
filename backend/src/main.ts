import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend communication
  // Support multiple origins: local development and production
  const allowedOrigins = process.env.CORS_ORIGIN 
    ? process.env.CORS_ORIGIN.split(',')
    : ['http://localhost:3000', 'http://frontend:3000'];
  
  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`🚀 Backend is running on: http://localhost:${port}`);
}

bootstrap();

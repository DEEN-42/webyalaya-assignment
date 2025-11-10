import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend communication
  // Read from environment variable or use defaults for local dev
  const corsOrigin = process.env.CORS_ORIGIN 
    ? process.env.CORS_ORIGIN.split(',').map(origin => origin.trim())
    : ['http://localhost:3000', 'http://frontend:3000'];
  
  // In development, allow all origins; in production use specified origins
  const corsConfig = process.env.NODE_ENV === 'production'
    ? { origin: corsOrigin, credentials: true }
    : { origin: true, credentials: true }; // Allow all in dev
  
  app.enableCors({
    ...corsConfig,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });  const port = Number(process.env.PORT || 4000);
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Backend is running on port ${port}`);
}

bootstrap();

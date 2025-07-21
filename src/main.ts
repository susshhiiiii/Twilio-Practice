import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Twilio')
    .setDescription('Twilio Implementation')
    .setVersion('1.0')
    .build()
  
  const DocumentFactory= ()=> SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api',app,DocumentFactory)

  await app.listen(3000);
}
bootstrap();

import { Module } from '@nestjs/common';
import { TwilioPracticeModule } from './twilio-practice/twilio-practice.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath:'.env'
  }),
    TwilioPracticeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

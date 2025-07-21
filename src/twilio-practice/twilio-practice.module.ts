import { Module } from '@nestjs/common';
import { TwilioPracticeService } from './twilio-practice.service';

@Module({
  providers: [TwilioPracticeService]
})
export class TwilioPracticeModule {}

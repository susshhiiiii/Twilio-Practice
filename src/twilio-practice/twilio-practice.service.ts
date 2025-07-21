import { HttpException, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';

@Injectable()
export class TwilioPracticeService implements OnModuleInit {
    private readonly client: Twilio;
    private readonly from: string;

    constructor(private configService: ConfigService) {
        const sid = this.configService.get<string>('TWILIO_ACCOUNT_SID');
        const token = this.configService.get<string>('TWILIO_AUTH_TOKEN');
        this.from = this.configService.get<string>('TWILIO_PHONE_NUMBER');

        this.client = new Twilio(sid, token);
    }

    async onModuleInit() {
        try {
            const result = await this.sendSms('+918580528233', 'Heyyyyyyyyy');
            console.log('SMS Sent:', result.sid);
        } catch (err) {
            console.error('❌ SMS sending failed:', err.message);
            throw new HttpException('Twilio SMS failed', 400);
        }
    }

    async sendSms(to: string, body: string) {
        return this.client.messages.create({
            body,
            from: this.from,
            to,
        });
    }
}

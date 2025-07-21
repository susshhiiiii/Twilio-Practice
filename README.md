Requirements

1.Install Packages

a) npm i @nestjs/config
b) npm i twilio


2.Add the env file variable to your env file

3.Thes use it as this in controller section

constructor(private twilioService: TwilioService) {}
await this.twilioService.sendSMS('+123456789', 'Hello from NestJS!');


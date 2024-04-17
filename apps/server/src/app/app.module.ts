import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OneGateway } from './one.gateway';
import { TwoGateway } from './two.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, OneGateway, TwoGateway],
})
export class AppModule {}

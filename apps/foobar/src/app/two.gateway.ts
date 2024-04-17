import { WebSocketGateway, SubscribeMessage } from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'two' })
export class TwoGateway {
  @SubscribeMessage('coucou-two')
  async handleCoucou() {
    return 'two';
  }
}

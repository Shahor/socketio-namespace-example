import { WebSocketGateway, SubscribeMessage } from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'one' })
export class OneGateway {
  @SubscribeMessage('coucou-one')
  async handleCoucou() {
    return 'hop';
  }
}

import { WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'two', transports: ['websocket'] })
export class TwoGateway {}

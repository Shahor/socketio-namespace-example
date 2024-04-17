import { WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'one', transports: ['websocket'] })
export class OneGateway {}

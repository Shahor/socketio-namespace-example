import Link from 'next/link';
import { io } from 'socket.io-client';

export default function Index() {
  io('http://localhost:4242/two', { transports: ['websocket'] });
  return (
    <div>
      <Link href="/one">Go to one</Link>
    </div>
  );
}

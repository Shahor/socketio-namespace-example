import Link from 'next/link';
import { io } from 'socket.io-client';

export default function Index() {
  io('http://localhost:4242/one', { transports: ['websocket'] });

  return (
    <div>
      <Link href="/two">Go to two</Link>
    </div>
  );
}

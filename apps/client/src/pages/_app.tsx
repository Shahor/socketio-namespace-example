import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

function useSocket() {
  const [socket, setSocket] = useState<Socket>();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const socket = io('http://localhost:4242', { transports: ['websocket'] });

    socket.on('connect', function () {
      console.log('CONNECTED');
      setConnected(true);
    });
    socket.on('disconnect', function () {
      console.log('DISCONNECTED');
      setConnected(false);
    });

    setSocket(socket);
  }, []);

  return { socket, connected };
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const { connected } = useSocket();

  return (
    <>
      <p>_app component having a {connected ? '' : 'dis'}connected socket</p>
      <Component {...pageProps} />
    </>
  );
}

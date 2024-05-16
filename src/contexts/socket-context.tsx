import getConfig from 'next/config';
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const { publicRuntimeConfig } = getConfig();

export enum SocketState {
  READY = 'READY',
  DISCONNECTED = 'DISCONNECTED',
  RECONNECTING = 'RECONNECTING',
}

type SocketProviderProps = {
  children: ReactNode;
};

type SocketContextProps = {
  connect: () => void;
  disconnect: () => void;
  state: SocketState;
} | null;

const SocketContext = createContext<SocketContextProps>(null);
export default SocketContext;

export function SocketProvider({ children }: SocketProviderProps) {
  const socketRef = useRef<WebSocket | undefined>();
  const [socketState, setSocketState] = useState<SocketState>(
    SocketState.RECONNECTING,
  );

  const connect = useCallback(() => {
    const socket = new WebSocket(publicRuntimeConfig.WS_URL);

    socket.addEventListener('open', () => {
      console.info(
        '%cconnection is established',
        'color: #9EFF52; font-size: 35px',
      );
      setSocketState(SocketState.READY);
    });

    socket.addEventListener('error', () => {
      console.error(
        '%cfailed to connect, Please try again later.',
        'color: #FA3B3B;',
      );
      setSocketState(SocketState.RECONNECTING);
    });

    socket.addEventListener('close', () => {
      console.info('%cconnection closed', 'color: #6B94FF; font-size: 35px');
      setSocketState(SocketState.DISCONNECTED);
    });

    socketRef.current = socket;
  }, []);

  const disconnect = useCallback(() => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.close(1000);
    }
  }, []);

  return (
    <SocketContext.Provider
      value={{
        connect,
        disconnect,
        state: socketState,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

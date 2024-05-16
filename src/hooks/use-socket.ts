import { useContext } from 'react';

import SocketContext from '@/contexts/socket-context';

export function useSocket() {
  const socketContext = useContext(SocketContext);
  if (!socketContext) {
    throw new Error('useSocket must be within SocketContext#Provider');
  }

  return socketContext;
}

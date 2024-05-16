export interface Session {
  id: string;
  userId: string;
  createdAt: Date;
  expiredAt: Date;
  userAgent: string;
  ipAddress: string;
}

export type Sessions = Session[];

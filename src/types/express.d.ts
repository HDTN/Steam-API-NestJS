// src/types/express.d.ts
import { Request } from 'express';

declare module 'express' {
    interface Request {
        isAuthenticated: () => boolean;
        user?: {
            steamId: string;
            displayName: string;
            photos: any[];
        };
    }
}

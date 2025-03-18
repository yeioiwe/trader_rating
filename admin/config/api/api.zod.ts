import { z } from 'zod';

export const AuthDto = z.object({ login: z.string(), password: z.string() }).passthrough();
export const AuthResponse = z.object({ authToken: z.string() }).passthrough();

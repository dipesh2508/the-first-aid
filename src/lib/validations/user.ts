import * as z from 'zod';

export const UserValidation = z.object({
    name: z.string().min(3).max(30),
    email: z.string().email(),
    phone: z.string().min(13).max(13),
    username: z.string().min(3).max(30),
    gender: z.string().min(4).max(6),
    aadhar: z.string().min(12).max(12),
    
}) 
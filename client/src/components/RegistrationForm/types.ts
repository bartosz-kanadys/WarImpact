import { z } from 'zod';

export const validationSchema = z.object({
    login: z.string()
            .min(1, "Login is required")
            .min(6, "Login must be at least 6 characters long"),
    email: z.string().email({ message: ' Invalid e-mail '}),
    password: z.string()
            .min(1, "Password is required")
            .min(8, "Password must be at least 8 characters long"),
})

export type LoginFormData = z.infer<typeof validationSchema>;
import {z} from 'zod';
export const newUser = z.object({
    id: z.string().min(1,{message: "ID is required"}),
    username: z.string().min(1,{message: "Username is required"}),
    email: z.string().min(1,{message: "email is required"}),
    name: z.string().min(1,{message: "Name is required"}),  
    age: z.string().optional();
});
import z from "zod"
export const registerschema = z.object({
    name: z.string().min(3,"Name must contain three letters"),
    email: z.string().email("Enter a valid mail id"),
    password: z.string().min(8,"password should contain 8 charecters"),
    age: z.coerce.number().min(18,"Age should be minimum of 18")
})
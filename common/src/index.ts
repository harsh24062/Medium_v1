import {z} from 'zod'

export const signupInput = z.object({
    email:z.string().email().refine(val=>val.endsWith("@gmail.com"),{message:"Invalid email"}),
    password:z.string().min(6,"Password must be at least 6 characters"),
    name:z.string().min(1,"Name is required")
})

export const signinInput = z.object({
    email:z.string().email().refine(val=>val.endsWith("@gmail.com"),{message:"Invalid email"}),
    password:z.string().min(6,"Password must be at least 6 characters")
})

export const createBlogInput = z.object({
    title:z.string(),
    content:z.string()
})

export const updateBlogInput = z.object({
    id:z.string(),
    title:z.string(),
    content:z.string()
})

export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>
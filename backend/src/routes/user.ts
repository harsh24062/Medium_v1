import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate'
import { signinInput, signupInput } from "@harsh_osk123/medium-common";

const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL_WORKER:string,
        JWT_SECRET:string
    }
}>()

userRouter.post('/signup', async (c) => {
  try {
      const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL_WORKER
  }).$extends(withAccelerate())

  const body = await c.req.json()
  const {success} = signupInput.safeParse(body)

  if(!success){
    c.status(400)
    return c.json({message:"Inputs are incorrect"})
  }

   // Check if email or name already exists
  const existingUser = await prisma.user.findFirst({
    where: { OR: [{email:body.email},{name:body.name}] },
  });

   if (existingUser) {
    c.status(409);
    return c.json({
      field: existingUser.email === body.email ? "email" : "name",
      message:
        existingUser.email === body.email
          ? "User already exists"
          : "Name is not unique",
    });
  }

 const user = await prisma.user.create({
    data:{
      email:body.email,
      password:body.password,
      name:body.name
    }
  })
  
  const token = await sign({userId:user.id},c.env.JWT_SECRET)
  return c.json({jwt:token})
  } catch (error) {
    c.status(500);
    return c.json({ error: "Internal Server Error" });
  }
})

userRouter.post('/signin', async (c) => {
  
  try {
    const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL_WORKER
  }).$extends(withAccelerate())
  
  const body = await c.req.json()
  const {success} = signinInput.safeParse(body)

  if(!success){
    c.status(400)
    return c.json({message:"Inputs are incorrect"})
  }

  const user = await prisma.user.findUnique({
    where:{
      email:body.email,
    }
  })

  if(!user || user.password!== body.password){
    c.status(401)
   return c.json({error:"Invalid email or Password"})
  }
  
  const token = await sign({userId:user.id},c.env.JWT_SECRET) 
   return c.json({jwt:token})
    
  } catch (error) {
     c.status(500);
    return c.json({ error: "Internal Server Error" });
  }
    
})

export default userRouter
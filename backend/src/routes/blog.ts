import { createBlogInput, updateBlogInput } from "@harsh_osk123/medium-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL_WORKER:string,
        JWT_SECRET:string
    },Variables:{
      userId:string
    }
}>()

//  middleware
blogRouter.use('/*', async(c,next) => {
    try {
      const headerAuth = c.req.header("authorization") || "" 
      const token = headerAuth.startsWith("Bearer ")?headerAuth.slice(7):""
      const user = await verify(token,c.env.JWT_SECRET)
      c.set("userId",String(user.userId))

      await next()
    }catch (error) {
     c.status(403)
     return c.json({message:"You are not Logged in"})   
    }
    
})

// get all  post
blogRouter.get('/get/:id', async (c) => {
	    try {
        
        const prisma = new PrismaClient({
          datasourceUrl:c.env.DATABASE_URL_WORKER
        }).$extends(withAccelerate())
        
        const id = c.req.param("id")
        const blog = await prisma.post.findFirst({
         where:{
            id:String(id)
         },
         select:{
          title:true,
          id:true,
          content:true,
           author:{
            select:{
              name:true
            }
           }
         }
        })
        return c.json({
            blog
        })
    } catch (error) {
      c.status(403)
      return c.json({error:"Internal Server Error"})  
    }
})

// create a new Post
blogRouter.post('/', async (c) => {
    try {
        const prisma = new PrismaClient({
          datasourceUrl:c.env.DATABASE_URL_WORKER
        }).$extends(withAccelerate())
        
        const userId = c.get("userId")
        const body = await c.req.json()
        const {success} = createBlogInput.safeParse(body)
        
        if(!success){
          c.status(411)
         return c.json({message:"Inputs are incorrect"})
        }

        const blog = await prisma.post.create({
         data:{
           title:body.title,
           content:body.content,
           authorId: userId
         }    
        })
        return c.json({
            id:blog.id
        })
    } catch (error) {
      c.status(403)
      return c.json({error:"Internal Server Error"})  
    }
})

// update the Post
blogRouter.put('/', async (c) => {
	 try {
        const prisma = new PrismaClient({
          datasourceUrl:c.env.DATABASE_URL_WORKER
        }).$extends(withAccelerate())

        const body = await c.req.json()
        const {success} = updateBlogInput.safeParse(body)

         if(!success){
          c.status(411)
         return c.json({message:"Inputs are incorrect"})
        }

        const blog = await prisma.post.update({
         where:{
           id:body.id
         },
         data:{
           title:body.title,
           content:body.content,
         }    
        })
        return c.json({
            id:blog.id
        })
    } catch (error) {
      c.status(403)
      return c.json({error:"Internal Server Error"})  
    }
})

blogRouter.get("/bulk",async(c)=>{
  try {
     const prisma = new PrismaClient({
          datasourceUrl:c.env.DATABASE_URL_WORKER
        }).$extends(withAccelerate())      
       
       const blogs = await prisma.post.findMany({
         select:{
           content:true,
           title:true,
           id:true,
           author:{
             select:{
              name:true
             }
           }
         }
       })
       return c.json({blogs})
    }catch (error) {
      c.status(403)
    return c.json({error:"Internal Server Error"})
  }
})

export default blogRouter
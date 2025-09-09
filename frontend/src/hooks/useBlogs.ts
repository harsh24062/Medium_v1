import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

interface BlogType {
  content:string;
  title:string;
  id:string;
  author:{
    name:string;
  }
}

interface Blog {
  content:string;
  id:string,
  title:string;
  author:{
    name:string
  }
}

const useBlog = ({id}:{id:string}) =>{
  const [loading,setLoading] = useState(true)
  const [blog,setBlog] = useState<Blog | null>(null)

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/get/${id}`,{headers:{
        Authorization: "Bearer "+localStorage.getItem("token")
       }}).then((res)=>{
          setBlog(res.data.blog)
          setLoading(false)
       })

    },[])

     return {
        loading,
        blog
    }
}

//  return all  blogs
const useBlogs = () => {
    const [loading,setLoading] = useState(true)
    const [blogs,setBlogs] = useState<BlogType[]>([])
    
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{headers:{
        Authorization: "Bearer "+localStorage.getItem("token")
       }}).then((res)=>{
          setBlogs(res.data.blogs)
          setLoading(false)
       })

    },[])

    return {
        loading,
        blogs
    }
}

export {
    useBlog,
    useBlogs
} 
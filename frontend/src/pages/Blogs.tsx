import AppBar from "../component/AppBar"
import BlogCard from "../component/BlogCard"
import BlogSkeleton from "../component/BlogSkeleton"
import {useBlogs} from "../hooks/useBlogs"

const Blogs = () => {
  const {blogs,loading} = useBlogs()
  
  if(loading){
    return <div>
      <AppBar />
     <div className="min-h-screen bg-gradient-to-r from-orange-500 via-pink-600 to-rose-700 flex flex-col justify-center items-center gap-7 p-5">
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
    </div>
    </div>
  }

  return <div>
    <AppBar />
  <div className="min-h-screen bg-gradient-to-r from-orange-500 via-pink-600 to-rose-700 flex flex-col justify-center items-center gap-7 p-5">
    {blogs.map((blog,index)=>(
      <div key={index}>
        <BlogCard authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={"Posted on Medium"}  id={blog.id}/>
      </div>
    ))}
  </div>
  </div>
  
}

export default Blogs
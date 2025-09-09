import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlogs";
import AppBar from "../component/AppBar";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) return <div className="text-white p-6">Loading...</div>;

  return (
    <div>
      <AppBar />
      <div className="bg-gradient-to-br from-black via-gray-900 to-purple-900 w-full min-h-screen text-white pt-6">
        <div className="grid grid-cols-12 px-10 gap-6">
          {/* Main Content */}
          <div className="col-span-8 space-y-6">
            <div className="text-4xl font-extrabold">{blog?.title}</div>
            <div className="text-gray-300">Posted on Medium</div>
            <div className="text-lg leading-relaxed pt-2">{blog?.content}</div>
          </div>

          {/* Sidebar */}
          <div className="invisible md:visible col-span-4 bg-gray-700/70 p-2 rounded-xl shadow-lg flex items-center gap-4 h-20 ">
      
            <div className="text-sm md:text-lg">
              <div>Author:</div>
              <div className="font-semibold">{blog?.author.name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

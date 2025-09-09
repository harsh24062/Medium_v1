import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:string
}

const BlogCard = ({ authorName, title, content, publishedDate, id }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="text-white p-4 rounded-xl bg-black/30 backdrop-blur-md shadow-lg max-w-md cursor-pointer">
      {/* Author + Date */}
      <div className="flex items-center gap-2 text-sm text-gray-200">
        <Avatar name={authorName} />
        <span className="font-medium">{authorName}</span>
        <span className="opacity-70">· {publishedDate}</span>
      </div>

      {/* Title */}
      <div className="mt-2 text-xl font-semibold text-white">
        {title.length > 50 ? title.slice(0,50) + "..." : title}
      </div>

      {/* Content */}
      <div className="mt-2 text-gray-200">
        {content.length > 80 ? content.slice(0, 80) + "..." : content}
      </div>

      {/* Read Time */}
      <div className="mt-2 text-sm text-gray-300">
        {`${Math.ceil(content.length / 80)} minutes read`}
      </div>

      {/* Divider */}
      <div className="bg-gray-400/40 h-[1px] w-full mt-3"></div>
    </div>
    </Link>
  );
};

export default BlogCard;

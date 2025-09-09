import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const AppBar = () => {
  return (
    <div className="sticky top-0 z-50 border-b bg-white/20 backdrop-blur-md shadow-md flex justify-between items-center px-10 py-4">
      {/* Logo / Brand */}
      <div className="text-2xl font-extrabold bg-gradient-to-r from-orange-700 via-pink-600 to-rose-700 bg-clip-text text-transparent">
        Medium
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <Link to={"/write"}>
        <button className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-600 to-rose-600 text-white font-medium shadow hover:scale-105 transition-transform">
          Write
        </button>
        </Link>
        <Avatar name="harsh" />
      </div>
    </div>
  );
};

export default AppBar;

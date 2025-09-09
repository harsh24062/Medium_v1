import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        { title, content },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      navigate(`/blog/${response.data.id}`);
    } catch (err) {
      console.error("Error posting blog:", err);
      alert("Failed to post blog. Make sure you are logged in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center px-4">
      <div className="bg-gray-800/80 rounded-xl shadow-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Write a Blog</h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {/* Title Input */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* Content Input */}
          <textarea
            placeholder="Content"
            rows={10}
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-white font-semibold py-3 rounded-md ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Post"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Write;

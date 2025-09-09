const BlogCardSkeleton = () => {
  return (
    <div className="w-full max-w-2xl bg-gray-700/70 rounded-xl shadow-lg p-6 animate-pulse flex flex-col space-y-4">
      {/* Title */}
      <div className="h-8 bg-gray-600 rounded w-3/4"></div>

      {/* Author / Date */}
      <div className="h-4 bg-gray-600 rounded w-1/2"></div>

      {/* Content */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-600 rounded w-full"></div>
        <div className="h-3 bg-gray-600 rounded w-full"></div>
        <div className="h-3 bg-gray-600 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;

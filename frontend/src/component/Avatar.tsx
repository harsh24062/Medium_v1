const Avatar = ({ name }: { name: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-full 
                    bg-gradient-to-tr from-blue-600 via-purple-500 to-pink-500 
                    shadow-lg overflow-hidden group">
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent 
                      bg-gradient-to-tr from-blue-400 to-pink-400 
                      opacity-70 blur-md group-hover:opacity-100 transition" />
      
      <span className="relative font-semibold text-white text-md">
        {name[0].toUpperCase()}
      </span>
    </div>
  )
}

export default Avatar

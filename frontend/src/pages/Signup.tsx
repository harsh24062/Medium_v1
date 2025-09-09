import Auth from "../component/Auth"
import Quote from "../component/Quote"

const Signup = () => {
  return <div  className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-tr from-blue-800 via-purple-600 to-pink-500">
    <div className="flex justify-center items-center p-6">
       <div className="bg-white rounded-2xl  min-h-[550px] shadow-xl w-full max-w-md p-6">
         <Auth type={"signup"}/>
        </div>
    </div>
    <div className="invisible lg:visible">
    <Quote />
    </div>
  </div>
}

export default Signup
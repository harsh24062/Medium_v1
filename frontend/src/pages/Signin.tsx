import Auth from "../component/Auth"
import Quote from "../component/Quote"

const Signin = () => {
  return <div  className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-tr from-black via-blue-900 to-blue-700
">
    <div className="flex justify-center items-center p-6">
       <div className="bg-white rounded-2xl  min-h-[550px] shadow-xl w-full max-w-md p-6">
         <Auth type={"signin"}/>
        </div>
    </div>
    <div className="invisible lg:visible">
    <Quote />
    </div>
  </div>
}

export default Signin
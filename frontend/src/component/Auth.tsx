import type { SignupInput } from "@harsh_osk123/medium-common"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Inputfield from "./Inputfield"
import { BACKEND_URL } from "../config"
import Swal from "sweetalert2";

const Auth = ({type}:{type:"signup"|"signin"}) => {
   
   const navigate = useNavigate()

   const [inputs,setInput] = useState<SignupInput>({
      email:"",
      password:"",
      name:""
   })

   const sendRequest = async() => {
      try {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
      inputs
    );
    const jwt = response.data.jwt;
    localStorage.setItem("token", jwt);
    navigate("/blogs");
  } catch (err: any) {
    const errorMessage =
      err.response?.data?.message ||
      err.response?.data?.error ||
      "Something went wrong. Please try again!";

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
      confirmButtonColor: "#1d4ed8",
      width: "300px",
      padding: "1em",
      customClass: {
        title: "text-lg",
        popup: "rounded-xl",
      },
    });
  }
   }

  return <div className="flex flex-col justify-center items-center gap-6">
     <div className="text-3xl font-bold">
        {type === "signup" ? "Create an Account" : "Welcome Back"}
     </div>
     <div>
        {type==="signup"?"Already have a Account?":"Don't have a Account?"}
         <Link to={type==="signup"?"/signin":"/signup"} className="underline underline-offset-3 pl-1">
           {type=="signup"?"Sign in":"Sign up"}
         </Link>
     </div>
     {/* email input field */}
     <Inputfield label={"Email"} type={"text"} placeholder={"Enter Email here..."} onChange={(e)=>{
         setInput(c => ({...c,email:e.target.value}))
     }}/>
     {/* name input field */}
     {type==="signup"?<Inputfield label={"Name"} type={"text"} placeholder={"Enter Name here..."} onChange={(e)=>{
         setInput(c => ({...c,name:e.target.value}))
     }}/>:null}
     {/* password input field */}
     <Inputfield label={"Password"} type={"password"} placeholder={"Enter Password here..."} onChange={(e)=>{
         setInput(c => ({...c,password:e.target.value}))
     }}/>
      
      <button type="button"
        onClick={sendRequest}
        className={type==="signup"?"relative w-full mt-2 px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 shadow-lg shadow-pink-500/30 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50 active:scale-95 transition-all duration-300 ease-in-out":"relative w-full mt-2 px-8 py-3 rounded-xl font-semibold text-white  bg-gradient-to-tr from-blue-950 via-blue-800 to-blue-700 shadow-lg shadow-blue-500/30 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 active:scale-95 transition-all duration-300 ease-in-out"}
      >
        {type === "signup" ? "Sign Up" : "Sign In"}
      </button>
 </div>
  
}

export default Auth
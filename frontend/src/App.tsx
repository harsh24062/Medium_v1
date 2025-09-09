import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"
import Blogs from "./pages/Blogs"
import Write from "./pages/Write"

function App() {
  return  (
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/blog/:id" element={<Blog/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/write" element={<Write/>}/>
       </Routes>
     </BrowserRouter>
    </>
  ) 
}

export default App
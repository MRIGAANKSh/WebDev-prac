//react router dom 

import Home from "./pages/contact";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/home";

function App(){
  return (
    <>
    <div className="w-full min-h-screen bg-black text-white">
     
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/con' element={<Contact/>} />
      </Routes>
      </div>
    </>
  )
}

export default App;
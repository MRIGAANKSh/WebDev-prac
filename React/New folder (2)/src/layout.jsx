import React from "react";
import {Outlet} from 'react-router-dom'
import Navbar from "./components/header/header";
import Footer from "./components/footer/footer";
function layout(){
return(
    <>
<Navbar/>
<Outlet/>
<Footer/>
    </>
)
}

export default layout
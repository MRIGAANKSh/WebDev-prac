import { useEffect, useState } from "react";

import { themerpovider } from "./context/usercontext";
import GitHubCard from "./componets/card";
import ToggleButton from "./componets/togglebtn";
function App() {

  const [themeMode,settheme]=useState('light')
  const darktheme=()=>{
    settheme('dark')
  }

  const lighttheme=()=>{
    settheme('light')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>
    <themerpovider value={{themeMode,darktheme,lighttheme}}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center gap-6 p-6">
        <ToggleButton />
        <GitHubCard />
      </div>
      </themerpovider>
    </>
  );
}

export default App;

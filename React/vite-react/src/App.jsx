import { useState } from "react"
import Card from "./componets/card"
//let Counter=15


function App(){
 let username="mrigaank sharma"
  return (
    
    <>
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <h1 className="text-7xl font-extrabold p-5 text-amber-900 ">My name is {username}</h1>
    <Card username="mrigaank sharma"/>
    <Card username="sushil sharma"/>
    <Card />
    </>
  )
  
}


export default App
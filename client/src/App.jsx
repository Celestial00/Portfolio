import { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { Transition } from '@headlessui/react'
import Hero from "./components/Hero";


function App() {

  const [isOpen, setisOpen] = useState(false);


  const checkBar = () => {

    setisOpen(!isOpen);

  }


  return (
    <>
      <Navbar check={checkBar} />
      {isOpen === true ? <Sidebar value={isOpen} check={checkBar} /> : " "}
      <Hero/>

    </>
  )
}

export default App

"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate();
  
  return (
    <nav className="bg-[#9300A5] text-white p-4 w-full ">
        <div className="flex flex-wrap justify-between items-center">
            <div className="text-xl font-regular">What's in Store</div>
            
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
            </button>
            <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:items-center mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
                <li>
                <p className="font-semibold hover:cursor-pointer hover:brightness-75" onClick={() => window.open("https://www.instagram.com/wesleyfo4004", "_blank")} alternative="Instagram" title="instagram dulu">
                    Check Instagram
                </p>
                </li>
                <li>
                <p className="font-semibold hover:cursor-pointer hover:brightness-75" onClick={() => navigate("/login")} title="Logout" >
                    Logout
                </p>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
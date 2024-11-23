import Navbar from "./shared/nav-bar";
import { Link } from "react-router-dom";
import Button from "@components/shared/button";
import Logo from "@assets/images/vector/logo.svg";
import { useState } from "react";


export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-row justify-between items-center py-5 sm:px-[50px] px-[20px] w-full">
      <div className="logo sm:w-[150px] w-[100px]">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <Navbar isOpen={isOpen} />
      <div className="lg:block md:hidden hidden">
        <Button 
          size="small"
          roundedFull={true}

        >
          Request a Free Quote
        </Button>
      </div>
      <div 
        className="lg:hidden md:hidden block"
        onClick={() => setIsOpen(true)}
      >
      <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor"></path></svg>
      </div>
      
    </div>
  )
}

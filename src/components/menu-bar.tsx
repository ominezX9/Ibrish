import Navbar from "./shared/nav-bar";
import { Link } from "react-router-dom";
import Button from "@components/shared/button";
import Logo from "@assets/images/vector/logo.svg";


export default function MenuBar() {
  return (
    <div className="flex flex-row justify-between items-center py-5 px-[50px] w-full">
      <div className="logo w-[150px]">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <Navbar />
      <div>
        <Button 
          size="small"
          roundedFull={true}

        >
          Request a Free Quote
        </Button>
      </div>
    </div>
  )
}

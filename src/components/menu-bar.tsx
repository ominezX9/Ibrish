import Navbar from "./shared/nav-bar";
import { Link } from "react-router-dom";
import Button from "@components/shared/button";


export default function MenuBar() {
  return (
    <div className="flex flex-row justify-between items-center py-5 px-10 w-full">
      <div className="logo">
        <Link to="/">Logo</Link>
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

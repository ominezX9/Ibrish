import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import useDeviceType from "@utils/get-device-type";
import Logo from "@assets/images/vector/logo.svg";
export default function Navbar({isOpen, setOpenStatus} : {isOpen: boolean, setOpenStatus: (status: boolean) => void}) {
  const deviceType = useDeviceType();
  const options = [
    "Home",
    "Services",
    "About Us",
    "Property",
    "Contact"
  ]
  const [selected, setSelected] = useState(0);
  const [open, setOpen ] = useState(false);


  useEffect(()=>{
    setOpen(isOpen)
    setOpenStatus(isOpen)
  }, [isOpen])
  return (
    <div className={`bg-white transition-all ease-in-out z-[20] ${deviceType === "phone" ? `fixed bottom-0 ${open ? "left-0" : "-left-[320px]"} w-[300px] top-0 ` : ""}`}>
      {
        deviceType === "phone" ? (
          <div>
            <div className="flex justify-between">
              <div className="logo w-[120px] p-5">
                <img src={Logo} alt="logo" />
              </div>
              <div className="bg-secondary flex justify-center items-center text-white w-[80px] cursor-pointer" onClick={() => {
                  setOpen(false)
                  setOpenStatus(false)
                }}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
              </div>
            </div>
            <ul className="mt-[100px] flex flex-col align-center py-5 px-20">
              {
                options.map((item, i) => (
                  <Link
                    className={`text-gray hover:text-primary mb-2 border-transparent hover:border-primary transition-all rounded-lg flex-none flex items-center justify-center p-2 ${selected == i ? "!bg-primary !text-white" : ""}`}
                    key={i}
                    to={`/${item}`}>
                    {item}
                  </Link>
                ))
              }
            </ul>
          </div>
        ) : (
          <div className="bg-white">
            <ul className="flex gap-2">
              {
                options.map((item, i) => (
                  <Link
                    className={`text-gray hover:text-primary hover:border-secondary transition-all flex-none flex items-center justify-center px-4 py-1 ${selected == i ? "!text-white bg-primary rounded-lg" : ""}`}
                    key={i}
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => { setSelected(i) }}>
                    {item}

                  </Link>
                ))
              }
            </ul>
          </div>
        )
      }

    </div>


  )
}

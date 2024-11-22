import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useDeviceType from "@utils/get-device-type";
export default function Navbar() {
  const deviceType = useDeviceType();
  const options = [
    "Home",
    "Services",
    "About Us",
    "Property",
    "Contact"
  ]
  const [selected, setSelected] = useState(0);

  return (
    <div className={`bg-white z-[20] ${deviceType === "phone" ? "absolute bottom-0 left-0 top-0 " : ""}`}>
      {
        deviceType === "phone" ? (
          <div>
            <ul className="flex justify-between align-center py-5 px-20">
              {
                options.map((item, i) => (
                  <Link
                    className={`text-gray hover:text-secondary border-2 border-transparent hover:border-secondary transition-all rounded-lg flex-none flex items-center justify-center shadow w-[40px] h-[40px] p-2 ${selected == i ? "!text-secondary !border-secondary" : ""}`}
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
            <ul className="flex gap-3">
              {
                options.map((item, i) => (
                  <Link
                    className={`text-gray hover:text-primary hover:border-secondary transition-all flex-none flex items-center justify-center px-2 py-1 ${selected == i ? "!text-white bg-primary" : ""}`}
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

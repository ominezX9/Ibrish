import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  const deviceType = useDeviceType();
  const options = [
    "dashboard",
    "more",
    "profile",
    "logout"
  ]
  const [selected, setSelected] = useState(0);

  return (
    <div className={`absolute bg-white z-[20] ${deviceType === "phone" ? "bottom-0 left-0 right-0" : "left-0 bottom-0 top-0"}`}>
      {
        deviceType === "phone" ? (
          <div>
            <ul className="flex justify-between align-center py-5 px-20">
              {
                options.map((item, i) => (
                  <Link
                    className={`${item === "logout" ? 'hover:!text-[tomato] hover:!border-[tomato]' : ''} text-gray hover:text-secondary border-2 border-transparent hover:border-secondary transition-all rounded-lg flex-none flex items-center justify-center shadow w-[40px] h-[40px] p-2 ${selected == i ? "!text-secondary !border-secondary" : ""}`}
                    key={i}
                    to={`/${item}`}>
                    {item}
                  </Link>
                ))
              }
            </ul>
          </div>
        ) : (
          <div className="h-full">
            <ul className="flex flex-col gap-5 p-5 shadow h-full">
              {
                options.map((item, i) => (
                  <Link
                    className={`${item === "logout" ? 'hover:!text-[tomato] hover:!border-[tomato]' : ''} text-gray hover:text-secondary border-2 border-transparent hover:border-secondary transition-all h-[50px] w-[50px] flex-none flex items-center justify-center rounded-lg p-3 ${selected == i ? "!text-secondary !border-secondary" : ""}`}
                    key={i}
                    to={`/${item}`}
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

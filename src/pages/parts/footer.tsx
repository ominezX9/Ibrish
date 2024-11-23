import { Link } from "react-router-dom";
import Logo from "@assets/images/vector/logo.svg";

export default function Footer() {
    return (
        <div className="flex flex-col gap-4 bg-lightblack text-white py-10 px-[50px]">
            <div className="top flex flex-row items-center bg-white/5 py-3 px-10 border border-white rounded-lg">
                <div className='basis-[70%]'>
                    <h1 className="text-lg ">Ready to Build Your Dream Home? Let's Make It Happen!</h1>
                </div>
                <div className="basis-[30%] flex flex-col">
                    <h3 className="text-sm">0708 848 7961, 0705 205 6006</h3>
                    <h3 className="text-sm">
                        <Link to="mailto:ibrishbuilding@gmail.com">
                            ibrishbuilding@gmail.com
                        </Link>
                    </h3>
                </div>
            </div>
            <hr className="border-white border-2 my-5"/>
            <div className="info flex flex-row justify-between">
                <div className="logo basis-[30%]">
                    <div className="sm:w-[150px] w-[200px]">
                    <img src={Logo} alt="" />
                    </div>
                </div>
                <div className="links basis-[60%] flex flex-row justify-between items-end">
                    <div className="text-xs">
                        <h6 className="font-bold mb-1">Quick Links</h6>
                        <div className="flex flex-col font-light gap-1">
                            <Link to="">Home</Link>
                            <Link to="">About</Link>
                            <Link to="">Property</Link>
                            <Link to="">Contact</Link>
                        </div>
                    </div>
                    <div className="text-xs">
                        <h6 className="font-bold mb-1">Explore More</h6>
                        <div className="flex flex-col font-light gap-1">
                            <Link to="">FAQ</Link>
                            <Link to="">Blog</Link>
                            <Link to="">Partners</Link>
                            <Link to="">Gallery</Link>
                        </div>
                    </div>
                    <div className="text-xs">
                        <h6 className="font-bold mb-1">Connect with us</h6>
                        <div className="flex flex-col font-light gap-1">
                            <Link to="">Facebook</Link>
                            <Link to="">Twitter</Link>
                            <Link to="">LinkedIn</Link>
                            <Link to="">Instagram</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

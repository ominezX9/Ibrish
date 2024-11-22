import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div className="flex flex-col gap-4 bg-lightblack py-10 px-[50px]">
            <div className="top flex flex-row items-center bg-white/20 border-2 border-white rounded-lg">
                <div className='basis-[70%]'>
                    <h1 className="text-lg">Ready to Build Your Dream Home? Let's Make It Happen!</h1>
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
            <div className="info flex flex-row">
                <div className="logo">

                </div>
                <div className="links flex flex-row">
                    <div className="basis-1/3 text-xs">
                        <h6 className="font-bold mb-1">Quick Links</h6>
                        <div>
                            <Link to="">Home</Link>
                            <Link to="">About</Link>
                            <Link to="">Property</Link>
                            <Link to="">Contact</Link>
                        </div>
                    </div>
                    <div className="basis-1/3 text-xs">
                        <h6 className="font-bold mb-1">Explore More</h6>
                        <div>
                            <Link to="">FAQ</Link>
                            <Link to="">Blog</Link>
                            <Link to="">Partners</Link>
                            <Link to="">Gallery</Link>
                        </div>
                    </div>
                    <div className="basis-1/3 text-xs">
                        <h6 className="font-bold mb-1">Connect with us</h6>
                        <div>
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

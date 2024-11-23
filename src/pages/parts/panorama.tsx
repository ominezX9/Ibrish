import { useState } from "react";
import ReactPannellum from "react-pannellum";
import Image1 from "@assets/images/shot-panoramic-composition-living-room.jpg";
import Image2 from "@assets/images/luxury-kitchen-modern-building-elegant-shiny-generated.jpg";
import Image3 from "@assets/images/shot-panoramic-composition-living-room-one.jpg";
import Image4 from "@assets/images/shot-panoramic-composition-bathroom_23-2150315639.jpg";
import Tabs from "@components/shared/tabs";
import { Link } from "react-router-dom";

export default function Panorama() {
    const [image, setImage] = useState<string>(Image1); // Current image for the panorama

    const tabsData = [
        { label: "Luxury Homes", content: Image1 },
        { label: "Commercial Offices", content: Image2 },
        { label: "Interior Designs", content: Image3 },
        { label: "Showrooms", content: Image4 },
    ];

    return (
        <div>
            <h1 className="xl:text-4xl lg:text-4xl md:text-3xl text-2xl text-center p-5 pt-10 mb-5 leading-10">
                Experience Every Angle <br />
                With the <span className="text-primary">360&#xb0;</span> Camera
            </h1>
            <div>
                {/* Pass setImage to Tabs */}
                <Tabs tabs={tabsData} setContent={(content) => {
                  setImage(content)
                }} />
            </div>
            <div className="bg-primary">
                <div className="relative bg-secondary h-[450px] overflow-hidden">
                  {/* <div className="absolute block z-[10] left-0 right-0 -top-[100px] rotate-180 bg-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffffff" fill-opacity="1" d="M0,192L120,170.7C240,149,480,107,720,106.7C960,107,1200,149,1320,170.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                      </svg>
                    </div> */}
                    <div className="absolute -top-10 z-[3] bow-curve rotate-180"></div>
                    <ReactPannellum
                        key={image}
                        id="panorama"
                        sceneId="panorama-scene"
                        imageSource={image} // Dynamically updates based on the selected tab
                        config={{
                            autoLoad: true,
                            compass: false,
                            pitch: 0,
                            yaw: 80,
                            autoRotate: -2,
                            hfov: 100, // Horizontal field of view
                            showControls: false,
                        }}
                    />
                    <Link
                      className="absolute hover:bg-black hover:text-white items-center rounded-full bottom-2 left-1/2 -translate-x-1/2 z-[15] flex flex-row border-2 border-black py-2 lg:px-5 md:px-3 px-2 gap-3"
                      to="/">
                        <span>
                          See our 360&deg; view
                        </span>
                        <span>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77V20l4-4-4-4v2.73c-3.15-.56-5-1.9-5-2.73 0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58 0-2.76-4.48-5-10-5z"></path></svg>
                        </span>
                    </Link>
                    {/* <div className="absolute block z-[10] left-0 right-0 -bottom-10 bg-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffffff" fill-opacity="1" d="M0,192L120,170.7C240,149,480,107,720,106.7C960,107,1200,149,1320,170.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                      </svg>
                    </div> */}
                    <div className="absolute -bottom-8 z-[3] bow-curve "></div>

                </div>
                
            </div>
        </div>
    );
}

import Jumbotron from "@components/shared/jumbotron";
import { Link } from "react-router-dom";
import Button from "@components/shared/button";
import { CountDetails } from "@services/api";
import ItemAndCount from "@components/shared/item-and-count";
import OurExpertise from "./parts/our-expertise";
import DiscoverSpaces from './parts/discover-spaces'
import Panorama from "./parts/panorama";
import Neighbors from "./parts/neighbors";
import Footer from "./parts/footer";
import HeroImage from "@assets/images/home-header.png"
import HeroImage2 from "@assets/images/home-header-2.png";
import Filter from "@components/shared/filter";

export default function Homepage() {
  return (
    <div>
      <div className="py-5 px-[50px]">
        <div className="mb-10">
          <Jumbotron
            className="!bg-[#dceeff] !p-0 !m-0 h-[850px]"
            children={
              <div className="relative h-full">
                <div className="flex flex-row justify-center items-center">
                  <div className="flex relative top-12 flex-col items-center z-[2]">
                    <h1 className="w-[450px] text-light text-center font-normal tracking-tighter text-5xl font-bold">
                      Bringing <br /> Your <span className="text-primary">Construction</span> <br />Ideas to Life
                    </h1>
                    <p className="text-sm text-center mt-3 w-[290px] font-light">
                      Where it's custom home, a functional office space,
                      or a complete building solution we turn vision into reality
                    </p>
                    <Link className="mt-6" to="/">
                      <Button
                        className="!px-10"
                        variant="primary"
                        size="medium"
                        roundedFull={true}
                        enableGlassEffect={true}
                      >
                        Get Started

                      </Button>
                    </Link>
                  </div>

                </div>
                <Filter/>
                <img className="absolute bottom-0 left-0 right-0" src={HeroImage} alt="" />
              </div>

            }
          />
        </div>
        <div className="mb-10">
          <h2 className="tracking-tighter text-3xl text-center pb-5">Discover Your Perfect Home - <br />Comfort and Convenience Await!</h2>
          <Jumbotron
            className="h-[500px] !p-0 !m-0 text-cream"
            children={
              <div className="relative h-full">
                <div className="absolute left-10 bottom-10 right-10">
                  <div className="relative z-[2] flex justify-between items-center">
                    <div>
                      <h3 className="text-3xl text-baleny w-[350px] leading-10">
                        Delivering Quality <br /> Service with Integrity
                      </h3>
                    </div>
                    <div className="flex gap-5">
                      {
                        CountDetails.map((item, i) => (
                          <ItemAndCount
                            key={i}
                            count={item.count}
                            title={item.title}
                          />
                        ))
                      }
                    </div>
                  </div>
                </div>
                <div className="filter bg-black/20 absolute top-0 left-0 right-0 bottom-0 z-[1]"></div>
                <img className="absolute z-[0] bottom-0 left-0 right-0" src={HeroImage2} alt="" />

              </div>

            }
          />
        </div>

        <OurExpertise />

        <DiscoverSpaces />
      </div>
      <div className="p-10"></div>
      <Panorama />
      <div className="py-5 px-[50px]">
        <Neighbors />
      </div>
      <Footer />
    </div>
  )
}

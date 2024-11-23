import Jumbotron from "@components/shared/jumbotron"
import Man from "@assets/images/man-on-call.png"

export default function OurExpertise() {
  return (
    <div className="flex lg:flex-row flex-col justify-between pb-10 mb-10">
          <div className="flex flex-col basis-[45%] flex-none">
            <Jumbotron className="!p-0 !m-0 sm:h-[360px]" children={
              <>
                <img src={Man} alt="" />
              </>
            }/>
            <div>
              <h3 className="text-md text-primary tracking-widest py-5 pb-4">
                OUR EXPERTISE
              </h3>
              <div className="text-2xl lg:mb-0 mb-4">
                Masters of Innovation, <br/>
                Builders of Excellence
              </div>
            </div>
          </div>
          <div className="flex flex-col basis-[50%] lg:gap-5 gap-3">
            {
              [
                {
                  title: "Residential Construction",
                  description: "Custom home built with precision and attention to detail, tailored for your lifestyle."
                },
                {
                  title: "Commercial Spaces",
                  description: "Functional and Modern office spaces that enhance productivity and professionalism."
                },
                {
                  title: "Interior Design",
                  description: "Transforming interiors to reflect personal style, comfort and functionalility."
                },
              ].map((item, i) => (
                <div key={i} className="group flex px-5 py-5 gap-5 bg-primary/20 hover:bg-secondary/10 rounded-lg cursor-pointer ">
                  <div className="icon flex-none">
                    <div className="w-[60px] h-[60px] bg-primary group-hover:bg-secondary rounded-full">
                      <img src={''} alt={item.title} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg lg:mb-2 mb-1">{item.title}</h3>
                    <p className="lg:leading-9 leading-7">{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
  )
}

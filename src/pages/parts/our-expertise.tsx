import Jumbotron from "@components/shared/jumbotron"

export default function OurExpertise() {
  return (
    <div className="flex flex-row justify-between pb-10 mb-10">
          <div className="flex flex-col basis-[47%] flex-none">
            <Jumbotron className="h-[400px]" children={undefined}/>
            <div>
              <h3 className="text-md text-primary tracking-widest py-5">
                OUR EXPERTISE
              </h3>
              <div className="text-3xl ">
                Masters of Innovation, <br/>
                Builders of Excellence
              </div>
            </div>
          </div>
          <div className="flex flex-col basis-[47%] gap-5">
            {
              [
                {
                  title: "Customized Solutions",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus id arcu scelerisque consectetur."
                },
                {
                  title: "Customized Solutions",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus id arcu scelerisque consectetur."
                },
                {
                  title: "Customized Solutions",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus id arcu scelerisque consectetur."
                },
              ].map((item, i) => (
                <div key={i} className="group flex px-5 py-5 gap-5 bg-primary/20 hover:bg-secondary/20 rounded-lg cursor-pointer ">
                  <div className="icon flex-none">
                    <div className="w-[60px] h-[60px] bg-primary group-hover:bg-secondary rounded-full">
                      <img src={''} alt={item.title} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                    <p className="leading-9">{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
  )
}

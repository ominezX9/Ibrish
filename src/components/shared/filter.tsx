import LocationIcon from "@assets/images/vector/location.svg";
import BuildingIcon from "@assets/images/vector/building.svg";
import BudgetIcon from "@assets/images/vector/budget.svg";
import Button from "./button";


export function Icon({ico} : {ico : string}){
    return (
        <div className="rounded-full w-8 p-1 border border-black ">
            <img src={ico} alt="" />
        </div>
    )
}

const fillers = [
    {
        icon: LocationIcon,
        label: "Location",
        data: ['lagos', 'abuja']
    },
    {
        icon: BuildingIcon,
        label: "Select Type",
        data: ['apartment', 'verde leiss']
    },
    {
        icon: BudgetIcon,
        label: "Budget",
        data: ['10 million', '5 million']
    }
]
export default function Filter() {
  return (
    <div className="absolute items-center left-1/2 bottom-10 -translate-x-1/2 rounded-lg w-[90%] flex px-5 py-3 bg-white z-[10] shadow-md">
      {
        fillers.map((filler, i) => (
            <div className="flex flex-row items-center gap-2 basis-1/4">
                <div>
                    <Icon key={i} ico={filler.icon} />
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold capitalize">{filler.label}</h3>
                    <select className="text-lightgrey text-sm cursor-pointer" name="" id="">
                        {
                            filler.data.map((data, j) => (
                                <option key={j} value={data}>{data}</option>
                            ))
                        }
                    </select>
                </div>

            </div>
        ))
      }
      <div className="cta basis-1/4">
        <Button variant="outline" className="!border-none !text-lightgrey hover:!text-black">
            Search Property
        </Button>
      </div>
    </div>
  )
}

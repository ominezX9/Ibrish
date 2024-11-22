import AnimatedNumber from "react-animated-numbers";
import { useEffect, useState } from "react";

type ItemAndCountProps = {
    count?: number;
    title?: string;
    className?: string; // For custom classes (default: "")
}
export default function ItemAndCount({
    count = 0,
    title = ""
}: ItemAndCountProps) {
    const [number, setNumber] = useState(count);
    useEffect(() => {
        setNumber(count);
    }, [count])
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row text-3xl items-center font-bold ">
                <div className="flex-none">
                    <AnimatedNumber
                        
                        fontStyle={{ fontFamily: "Onest", fontSize: 35, fontWeight: "bold", wordSpacing: 2 }}
                        animateToNumber={number}
                        transitions={(index) => ({
                            type: "spring",
                            duration: index + 0.3,
                        })}
                        includeComma
                    />
                </div>
                <div className="flex-none">+</div>
            </div>

            <p className="text-sm">
                {title}
            </p>
        </div>
    )
}

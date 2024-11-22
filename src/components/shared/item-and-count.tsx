import AnimatedNumber from "react-animated-numbers";
import { useState } from "react";

type ItemAndCountProps = {
    count?: number;
    title?: string;
    className?: string; // For custom classes (default: "")
}
export default function ItemAndCount({
    count = 0,
    title = ""
}: ItemAndCountProps) {
    const [number] = useState(count);
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row text-3xl items-center font-bold ">
                <div>
                    <AnimatedNumber
                        className="flex-none"
                        fontStyle={{ fontFamily: "Onest", fontSize: 35, fontWeight: "bold", wordSpacing: 1 }}
                        animateToNumber={number}
                        transitions={(index) => ({
                            type: "spring",
                            duration: index + 0.3,
                        })}
                        includeComma
                    />
                </div>
                <div>+</div>
            </div>

            <p className="text-sm">
                {title}
            </p>
        </div>
    )
}

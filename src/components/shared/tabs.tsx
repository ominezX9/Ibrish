import  { useState } from "react";

type TabProps = {
    tabs: Array<{ label: string; content: string }>;
    setContent: (content: string) => void;
};

export default function Tabs({ tabs, setContent }: TabProps) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full flex">
            <div className="inline-flex flex-row bg-primary/20 sm:gap-2 gap-1 text-xs rounded-full sm:py-2 py-1 sm:px-4 px-2 mx-auto">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveTab(index); // Update active tab
                            setContent(tab.content); // Pass the correct image to parent
                        }}
                        className={`lg:px-5 md:px-4 px-2 sm:py-2 py-1 rounded-full ${
                            activeTab === index ? "bg-primary text-white" : "text-black"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

import React, { useState } from "react";

type TabProps = {
    tabs: Array<{ label: string; content: string }>;
    setContent: (content: string) => void;
};

export default function Tabs({ tabs, setContent }: TabProps) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full flex">
            <div className="inline-flex flex-row bg-primary/20 gap-2 text-xs rounded-full py-2 px-4 mx-auto">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveTab(index); // Update active tab
                            setContent(tab.content); // Pass the correct image to parent
                        }}
                        className={`px-5 py-2 rounded-full ${
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

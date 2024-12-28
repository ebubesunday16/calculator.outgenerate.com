'use client'
import { useState } from "react"
import { CalculatorConfig } from "@/types"
import TravelContainer from "../reusables/travelcontainer"
import { Illustration, Thumbnail, Thumbnail2, Thumbnail4, Thumbnail5, Thumbnail6 } from "../svgs";

const TabbedCalculator = ({ calculators }: { calculators: CalculatorConfig[] }) => {
    const categories = Array.from(new Set(calculators.map((calculator) => calculator.category)));

    const [activeCategory, setActiveCategory] = useState('all');

    const handleCategory = (categoryName: string) => {
        setActiveCategory(categoryName);
    };

    const filterCategory = (categoryName: string) => {
        return calculators.filter((calculator) => calculator.category === categoryName);
    };

    const displayedCalculators = activeCategory === 'all' 
        ? calculators 
        : filterCategory(activeCategory);

    // Background classes to alternate
    const bgClasses = ["bg-[#FF65B5]/15", "bg-[#77FF65]/15", "bg-[#8665FF]/15"];

    // Thumbnail components array
    const thumbnails = [Thumbnail, Thumbnail2,  Thumbnail4, Thumbnail5, Thumbnail6, ];

    return (
        <div>
            <div className="border-black border overflow-x-auto p-5 space-x-4 flex rounded-[15px]">
                <button 
                    onClick={() => handleCategory('all')} 
                    className={`text-base px-4 py-1 rounded-[10px] ${activeCategory === 'all' ? 'bg-black text-white' : 'text-black border border-black'}`}
                >
                    All
                </button>
                {categories.length > 0 && categories.map((item) => (
                    <button 
                        key={item} 
                        onClick={() => handleCategory(item)} 
                        className={`text-base px-4 py-1 rounded-[10px] ${activeCategory === item ? 'bg-black text-white' : 'text-black border border-black'}`}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
                {displayedCalculators.map((calculator, index) => (
                    <TravelContainer 
                        key={calculator.title} 
                        calculator={calculator} 
                        className={bgClasses[index % bgClasses.length]} 
                        thumbnail={thumbnails[index % thumbnails.length]} 
                    />
                ))}
            </div>
        </div>
    );
};


export default TabbedCalculator

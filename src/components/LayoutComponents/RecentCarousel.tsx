import { CalculatorConfig } from "@/types";
import TravelContainer from "../reusables/travelcontainer";
import {  Thumbnail, Thumbnail2, Thumbnail4, Thumbnail5, Thumbnail6 } from "../svgs"; // Import your thumbnails

const RecentCarousel = ({ className, calculators }: { className: string; calculators: CalculatorConfig[] }) => {
  const backgroundClasses = [
    "bg-[#C3B9E8]",
    "bg-[#E8E4B9]",
    "bg-[#E8BBB9]"
  ]; // Array of background classes

  const thumbnails = [Thumbnail, Thumbnail2, Thumbnail4, Thumbnail5, Thumbnail6, ]; // Array of thumbnails

  return (
    <div className={`${className}`}>
      <h2 className="font-bold text-xl sm:text-2xl mb-4">Recent Addition</h2>
      {calculators.length > 0 && (
        <div className="flex gap-16 overflow-x-auto">
          {calculators
            .slice()
            .reverse()
            .map((calculator, index) => {
              const ThumbnailComponent = thumbnails[index % thumbnails.length]; // Select thumbnail based on index

              return (
                <TravelContainer
                  key={index}
                  calculator={calculator}
                  className={backgroundClasses[index % backgroundClasses.length]} // Assign background class
                  thumbnail={ThumbnailComponent} // Pass thumbnail
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default RecentCarousel;

import { FC } from "react";
import { CalculatorConfig } from "@/types";
import Link from "next/link";
import { Ellipse, Embellishments } from "../svgs";

const TravelContainer = ({
  calculator,
  className,
  thumbnail: ThumbnailComponent,
}: {
  calculator: CalculatorConfig;
  className: string;
  thumbnail: FC<{className?: string}>;
}) => {
  return (
    <div className="border border-black rounded-[15px] min-w-[280px]">
      <div className={`w-full rounded-t-[15px] p-6 ${className}`}>
        <div className="text-center flex items-center relative">
          <Embellishments className="absolute left-0 top-0" />
          <div className="text-[8px] absolute right-0 top-0 flex items-center gap-1">
            <p className="underline">
              <Link href="/">
                {calculator.category}
              </Link>
            </p>
            <Ellipse />
          </div>
          <ThumbnailComponent className="mx-auto" />
          <Embellishments className="absolute right-0 bottom-0" />
        </div>
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-lg hover:underline">
          <Link href={calculator.slug}>
            {calculator.title}
          </Link>
        </h3>
        <p className="text-[10px]">{calculator.description}</p>
        <button>
          <Link
            className="text-xs border-black border rounded-[15px] px-4 py-[4px] hover:shadow-minimalistic-3"
            href={calculator.slug}
          >
            Calculate Now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default TravelContainer;

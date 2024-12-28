import ChasePointsCalculator from "./ChasePoint/ChasePointsCalculator";

import { CalculatorConfig } from "@/types";
import PhotographerTravelFee from "./PhotographerTravel/PhotographerTravel";
import WeddingNumerologyCalculator from "./WeddingNumerology/WeddingNumerologyCalculator";
import FengShouiCalculator from "./FengShoui/FengShouiCalculator";
import WeddingCakeCalculator from "./WeddingCakeCost/WeddingCakeCalculator";
import WeddingRSVPCalculator from "./Rvsp/WeddingRSVPCalculator";


type CalculatorComponent = React.ComponentType<{}>;

export const CALCULATOR_COMPONENTS: Record<string, CalculatorComponent> = {

    'chase-points': ChasePointsCalculator,
    'photographer-travel-fee': PhotographerTravelFee,
    'wedding-numerology': WeddingNumerologyCalculator,
    'feng-shui-wedding': FengShouiCalculator,
    'wedding-cake-cost': WeddingCakeCalculator,
    'wedding-rsvp-date': WeddingRSVPCalculator,
}

export function getCalculatorComponent(id: string): CalculatorComponent | null {
    return CALCULATOR_COMPONENTS[id] || null;
}
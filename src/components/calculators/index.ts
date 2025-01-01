import ChasePointsCalculator from "./ChasePoint/ChasePointsCalculator";

import { CalculatorConfig } from "@/types";
import PhotographerTravelFee from "./PhotographerTravel/PhotographerTravel";
import WeddingNumerologyCalculator from "./WeddingNumerology/WeddingNumerologyCalculator";
import FengShouiCalculator from "./FengShoui/FengShouiCalculator";
import WeddingCakeCalculator from "./WeddingCakeCost/WeddingCakeCalculator";
import WeddingRSVPCalculator from "./Rvsp/WeddingRSVPCalculator";
import WeddingFlowerCalculator from "./FlowerCalculator/WeddingFlowerCalculator";
import WeddingAlcoholCalculator from "./WeddingAlcoholCalculator/WeddingAlcoholCalculator";
import WeddingDrinkCalculator from "./WeddingDrinkCalculator/WeddingDrinkCalculator";
import WeddingVenueCalculator from "./WeddingVenueCalculator/WeddingVenueCalculator";
import WeddingTentCalculator from "./WeddingTentCalculator/WeddingTentCalculator";
import WeddingCateringCalculator from "./WeddingCateringCalculator/WeddingCateringCalculator";


type CalculatorComponent = React.ComponentType<{}>;

export const CALCULATOR_COMPONENTS: Record<string, CalculatorComponent> = {

    'chase-points': ChasePointsCalculator,
    'photographer-travel-fee': PhotographerTravelFee,
    'wedding-numerology': WeddingNumerologyCalculator,
    'feng-shui-wedding': FengShouiCalculator,
    'wedding-cake-cost': WeddingCakeCalculator,
    'wedding-rsvp-date': WeddingRSVPCalculator,
    'wedding-flower-calculator': WeddingFlowerCalculator,
    'wedding-alcohol-calculator': WeddingAlcoholCalculator,
    'non-alcoholic-drink-calculator': WeddingDrinkCalculator,
    'wedding-venue-cost': WeddingVenueCalculator,
    'wedding-tent-calculator': WeddingTentCalculator,
    'wedding-catering': WeddingCateringCalculator,
    
}

export function getCalculatorComponent(id: string): CalculatorComponent | null {
    return CALCULATOR_COMPONENTS[id] || null;
}
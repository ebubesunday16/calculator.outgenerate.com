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
import WeddingAnniversaryCalculator from "./WeddingAnniversaryCalculator/WeddingAnniversaryCalculator";
import WeddingPhotographyCalculator from "./WeddingPhotographyCalculator/WeddingPhotographyCalculator";
import CoupleNumerologyCalculator from "./CoupleNumerologyCalculator/CoupleNumerologyCalculator";
import ChaldeanNumerologyCalculator from "./ChaldeanNumerologyCalculator/ChaldeanNumerologyCalculator";
import PythagoreanNumerologyCalculator from "./PythagoreanNumerologyCalculator/PythagoreanNumerologyCalculator";
import HalfYourAgePlusSevenCalculator from "./HalfYourAgePlusSevenCalculator/HalfYourAgePlusSevenCalculator";
import ThreeQuarterBirthdayCalculator from "./ThreeQuarterBirthdayCalculator/ThreeQuarterBirthdayCalculator";
import AcceptableAgeGapCalculator from "./AcceptableAgeGapCalculator/AcceptableAgeGapCalculator";


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
    'wedding-anniversary': WeddingAnniversaryCalculator,
    'wedding-photography-pricing' : WeddingPhotographyCalculator,
    'couple-numerology' : CoupleNumerologyCalculator,
    'chaldean-numerology' : ChaldeanNumerologyCalculator,
    'pythagorean-numerology' : PythagoreanNumerologyCalculator,
    'half-seven' : HalfYourAgePlusSevenCalculator,
    'three-quarter-birthday' : ThreeQuarterBirthdayCalculator,
    'acceptable-age-gap-calculator' : AcceptableAgeGapCalculator,
    
}

export function getCalculatorComponent(id: string): CalculatorComponent | null {
    return CALCULATOR_COMPONENTS[id] || null;
}
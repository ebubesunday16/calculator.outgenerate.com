import { Calculators } from "@/config/calculator"

export const getCalculatorsBySlug = (slug: string) => {
    return Calculators.find(calc => calc.slug === slug)
}

export const getFeaturedCalculators = () => {
    return Calculators.filter(calc => calc.featured)
}


export const getCalculatorsByCategory = (category: string) => {
    return Calculators.filter(calc => calc.category === category);
}
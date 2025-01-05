export type CalculatorCategory = 
  | 'Travel' 
  | 'Finance' 
  | 'Health' 
  | 'Business'
  | 'Conversion'
  | 'Photography'
  | 'Wedding'
  | 'Numerology'
  | 'Birthday'
  | 'Relationship'
  // Add more categories as needed


export interface CalculatorMetadata {
    title: string;
    description: string;
    keywords: string[];
}
export interface CalculatorConfig {
  id: string
  title: string
  description: string
  slug: string
  category: CalculatorCategory
  metadata: CalculatorMetadata
  featured?: boolean
  dateAdded: string
  lastUpdated: string
}
import { notFound } from "next/navigation";
import { getCalculatorsBySlug } from "@/utils/calculator";
import { Metadata, ResolvingMetadata } from "next";
import { Calculators } from "@/config/calculator";
import { getCalculatorComponent } from "@/components/calculators";

// Define strong types for the props
interface PageProps {
    params: {
        slug: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
}

// Constants for better maintainability
const BASE_URL = 'https://calculator.outgenerate.com';
const DEFAULT_TITLE = 'Calculator Not Found';

// Separate metadata type for better type safety
interface CalculatorMetadata {
    title: string;
    description: string;
    keywords: string[];
}

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    try {
        const calculator = getCalculatorsBySlug(params.slug);
        
        if (!calculator) {
            return {
                title: DEFAULT_TITLE,
            };
        }

        const { metadata } = calculator;
        
        return {
            title: `${metadata.title} | OutGenerate`,
            description: metadata.description,
            keywords: metadata.keywords,
            metadataBase: new URL(BASE_URL),
            alternates: {
                canonical: `${BASE_URL}/${params.slug}`,
            },
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: DEFAULT_TITLE,
        };
    }
}

export default async function CalculatorPage({ params }: PageProps) {
    try {
        const calculator = getCalculatorsBySlug(params.slug);
        
        if (!calculator) {
            notFound();
        }

        const CalculatorComponent = getCalculatorComponent(calculator.id);
        
        if (!CalculatorComponent) {
            throw new Error(`Calculator component not found for ID: ${calculator.id}`);
        }

        return (
            <main className="max-w-3xl mx-auto">
                <CalculatorComponent />
            </main>
        );
    } catch (error) {
        console.error('Error rendering calculator:', error);
        return <div className="text-center text-red-600">An error occurred while loading the calculator.</div>;
    }
}

export async function generateStaticParams() {
    return Calculators.map((calc) => ({
        slug: calc.slug,
    }));
}
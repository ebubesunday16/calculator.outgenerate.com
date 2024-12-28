import { notFound } from "next/navigation";
import { getCalculatorsBySlug } from "@/utils/calculator";
import { Metadata, ResolvingMetadata } from "next";
import { Calculators } from "@/config/calculator";
import { getCalculatorComponent } from "@/components/calculators";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
    searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata 
): Promise<Metadata> {
    const resolvedParams = await params;
    const calculator = getCalculatorsBySlug(resolvedParams.slug)
    if (!calculator){
        return{
            title: 'Calculator Not Found',
        }
    }
    return {
        title: `${calculator.metadata.title} | OutGenerate`,
        description: calculator.metadata.description,
        keywords: calculator.metadata.keywords,
        metadataBase: new URL('https://calculator.outgenerate.com'),
        alternates: {
            canonical: `https://calculator.outgenerate.com/${resolvedParams.slug}`,
        },
    }
}

export default async function CalculatorPage({ params }: PageProps) {
    const resolvedParams = await params;
    const calculator = getCalculatorsBySlug(resolvedParams.slug)
    if (!calculator) {
        notFound()
    }
    const CalculatorComponent = getCalculatorComponent(calculator.id)
    if (!CalculatorComponent) {
        return <p>Calculator Object Not Found</p>;
    }
    return(
        <div className="max-w-3xl mx-auto">
            <CalculatorComponent/>
        </div>
    )
}

export async function generateStaticParams() {
    return Calculators.map((calc) => ({
        slug: calc.slug,
    }));
}
import { notFound } from "next/navigation";
import { getCalculatorsBySlug } from "@/utils/calculator";
import { Metadata, ResolvingMetadata } from "next";
import { Calculators } from "@/config/calculator";
import { getCalculatorComponent } from "@/components/calculators";

type Props = {
    params: { slug: string}
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata 
): Promise<Metadata> {
    const calculator =  getCalculatorsBySlug(params.slug)

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
            canonical: `https://calculator.outgenerate.com/${params.slug}`,
        },

    }
}

export default function CalculatorPage({params}: Props){
    const calculator = getCalculatorsBySlug(params.slug)

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


// Generate all calculator paths
export async function generateStaticParams() {
    return Calculators.map((calc) => ({
        slug: calc.slug,
    }));
}
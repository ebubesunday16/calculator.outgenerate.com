import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/LayoutComponents/Header";
import Footer from "@/components/LayoutComponents/Footer";

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: "The Home of Calculators",
  description: "From calorie counters (BMI included) to Calculus, and every conversion metric in between—down to the last 0-degree precision, all powered by the best of algorithms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className} antialiased max-w-5xl  mx-auto`}
      >
        <div className="w-full px-5 py-10 xl:px-0">
        <HeaderComponent className='z-50' />
        {children}
        <Footer className='mt-24 mb-8' />

        </div>
      </body>
    </html>
  );
}

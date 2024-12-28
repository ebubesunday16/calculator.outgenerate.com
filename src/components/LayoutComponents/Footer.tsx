import Image from "next/image"
import Link from "next/link"


const Footer = ({className}: {className: string}) => {
  return (
    <footer className={`flex flex-col relative space-y-6 sm:space-y-0 sm:flex-row sm:justify-between  ${className} `}> 
        <div className="flex flex-col space-y-4">
            <Image 
                src={`/logo.svg`}
                width={200}
                height={30}
                alt='outgenerate logo in text'
                className="sm:mb-2"
            />
            <p className="text-[12px] sm:max-w-[200px]">
                Outgenerate is a brain child of Emmanuel Sunday, a Computer Science Sophomore, tech fanatic
            </p>
            <p className="text-[10px]">&copy; Copyright  {new Date().getFullYear()}.</p>
        </div>


        <div>
            <h2 className="text-base font-bold mb-2">Explore</h2>
            <ul className="text-xs font-light flex flex-col space-y-2 ">
                <li className="hover:underline">
                    <Link href={'/'}>Home</Link>
                </li>
                <li className="hover:underline">
                    <Link href='/about-us'>
                        About
                    </Link>
                </li>
                <li className="hover:underline">
                    <Link href="/all">
                        Tools
                    </Link>
                </li>
            </ul>
        </div>

        <div>
            <h2 className="text-base font-bold mb-2">Legals</h2>
            <ul className="text-xs font-light flex flex-col space-y-2">
                <li className="hover:underline">
                    <Link href='/privacy-policy'>
                    Privacy Policy
                    </Link>
                </li>
                <li className="hover:underline">
                    <Link href='/terms-of-service'>
                    Terms of Service
                    </Link>


                </li>
            </ul>
        </div>

        <div>
            <h2 className="text-base font-bold mb-2">join our newsletter</h2>
            <input type="text" placeholder="Email Adress" className="border border-black py-2 px-7 text-xs text-black rounded-2xl bg-[#FF6C2D]/10"/>
        </div>

        




      
    </footer>
  )
}

export default Footer

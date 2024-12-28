"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SearchBar from '../reusables/searchbar';
import Link from 'next/link';

const HeaderComponent = ({ className }: { className: string }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setIsSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <header 
        className={`
          flex justify-between flex-col flex-1 
          sm:flex-row sm:items-center sm:space-x-16 
          space-y-10 sm:space-y-0
          ${isSticky ? 'sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:z-50 sm:bg-white/95 sm:shadow-sm sm:px-4 sm:py-2 sm:backdrop-blur-sm' : ''}
          transition-all duration-300
          ${className}
        `}
      >
        <Link 
          href="/" 
          className={`
            mx-auto sm:mx-0
            ${isSticky ? 'sm:transform sm:scale-95' : ''}
            transition-transform duration-300
          `}
        >
          <Image
            src="/logo.svg"
            width={200}
            height={30}
            alt="outgenerate logo in text"
            className="transition-all duration-300"
          />
        </Link>
        
        <nav className="flex-auto">
          <div 
            className={`
              ${isSticky ? 'max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:right-0 max-sm:z-50 max-sm:bg-white/95 max-sm:shadow-sm max-sm:px-4 max-sm:py-2 max-sm:backdrop-blur-sm' : ''}
              transition-all duration-300
            `}
          >
            <SearchBar 
              className={`
                sm:ml-auto
                ${isSticky ? 'max-sm:transform max-sm:scale-95' : ''}
                transition-transform duration-300
              `}
            />
          </div>
        </nav>
      </header>
      
      {/* Spacer for sticky states */}
      {isSticky && (
        <div className={`
          max-sm:h-16 sm:h-24
          ${!isSticky ? 'hidden' : ''}
        `} />
      )}
    </div>
  );
};

export default HeaderComponent;
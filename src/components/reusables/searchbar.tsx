'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Calculators } from '@/config/calculator';
import { useRouter } from 'next/navigation';

const SearchBar = ({ className }: { className: string }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showTopTools, setShowTopTools] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [topTools, setTopTools] = useState<Array<{ title: string; slug: string }>>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Handle clicks outside of the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setShowTopTools(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Generate suggestions based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = Calculators
        .filter(calc => calc.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(calc => calc.title)
        .slice(0, 10);
      setSuggestions(filtered);
    } else {
      // Show random suggestions when no search term
      const randomSuggestions = [...Calculators]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)
        .map(calc => calc.title);
      setSuggestions(randomSuggestions);
    }
  }, [searchTerm]);

  // Generate random top tools
  useEffect(() => {
    const randomTools = [...Calculators]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10)
      .map(calc => ({ title: calc.title, slug: calc.slug }));
    setTopTools(randomTools);
  }, []);

  const handleNavigate = useCallback((slug: string) => {
    router.push(`${slug}`);
    setShowSuggestions(false);
    setShowTopTools(false);
    setSearchTerm('');
  }, [router]);

  const handleSuggestionClick = useCallback((title: string) => {
    const calculator = Calculators.find(calc => calc.title === title);
    if (calculator) {
      handleNavigate(calculator.slug);
    }
  }, [handleNavigate]);

  return (
    <div className={`relative max-w-2xl z-50 ${className}`} ref={searchRef}>
      <div className="relative z-50">
        <input
          type="text"
          className="w-full pl-10 py-2 rounded-[10px] bg-transparent border border-black shadow-minimalistic z-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
        />
        <Search
          className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-3"
          size="20px"
          color="#000000"
          strokeWidth={1}
        />
        <div
          className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-4 flex items-center gap-2 cursor-pointerz-50"
          onClick={() => setShowTopTools(!showTopTools)}
        >
          <p className="text-sm">Top Tools</p>
          {showTopTools ? (
            <ChevronUp size={12} strokeWidth={1.5} />
          ) : (
            <ChevronDown size={12} strokeWidth={1.5} />
          )}
        </div>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer z-50"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}

      {/* Top Tools Dropdown */}
      {showTopTools && (
        <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          {topTools.map((tool, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer z-50"
              onClick={() => handleNavigate(tool.slug)}
            >
              {tool.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
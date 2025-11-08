import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavItem = {
  name: string;
  url: string;
};

interface NavBarProps {
  items: NavItem[];
}

export const NavBar: React.FC<NavBarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile: Hamburger Menu */}
      <div className="md:hidden fixed top-4 right-4 z-[100]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/70 backdrop-blur-md p-3 rounded-full shadow-sm border border-gray-200/50 hover:bg-white/90 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-text-primary" />
          )}
        </button>
        
        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 right-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 py-2 min-w-[200px] overflow-hidden">
            {items.map((item, idx) => (
              <a 
                key={idx} 
                href={item.url}
                onClick={handleLinkClick}
                className="block px-6 py-3 text-text-primary font-body font-medium hover:bg-gray-50 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop: Full Horizontal Navbar */}
      <nav className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] bg-white/70 backdrop-blur-md px-8 py-3 rounded-full shadow-sm border border-gray-200/50">
        <div className="flex gap-8">
          {items.map((item, idx) => (
            <a 
              key={idx} 
              href={item.url} 
              className="text-text-primary font-body font-medium text-base hover:text-primary transition-colors whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export function NavBarDemo() {
  const navItems: NavItem[] = [
    { name: 'Home', url: '#hero' },
    { name: 'What We Build', url: '#about' },
    { name: 'How It Works', url: '#how-it-works' },
    { name: 'Real Examples', url: '#real-examples' },
    { name: 'Contact', url: '#contact' },
  ];
  
  return <NavBar items={navItems} />;
}
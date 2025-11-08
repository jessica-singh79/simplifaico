import React from 'react';

type NavItem = {
  name: string;
  url: string;
};

interface NavBarProps {
  items: NavItem[];
}

export const NavBar: React.FC<NavBarProps> = ({ items }) => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/70 backdrop-blur-md px-6 py-2.5 rounded-full shadow-sm border border-gray-200/50">
      <div className="flex gap-8">
        {items.map((item, idx) => (
          <a 
            key={idx} 
            href={item.url} 
            className="text-text-primary font-body font-medium text-sm hover:text-primary transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
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
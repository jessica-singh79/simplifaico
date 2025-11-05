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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200">
      <div className="flex gap-6 md:gap-8">
        {items.map((item, idx) => (
          <a key={idx} href={item.url} className="text-gray-900 font-medium text-sm md:text-base hover:text-indigo-600 transition-colors">
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
    { name: 'About', url: '#about' },
    { name: 'Why Us', url: '#why-simplifai' },
    { name: 'FAQ', url: '#faq' },
    { name: 'Contact', url: '#contact' },
  ];
  
  return <NavBar items={navItems} />;
}
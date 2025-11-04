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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 flex gap-6 sm:gap-10 z-50">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.url}
          className="relative text-black font-heading font-bold text-sm sm:text-base md:text-xl px-2 py-1 transition-all duration-300 
                     hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:underline"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export function NavBarDemo() {
  const navItems: NavItem[] = [
    { name: 'Home', url: '#hero' },
    { name: 'About', url: '#about' },
    { name: 'Services', url: '#services' },
    { name: 'FAQ', url: '#faq' },
    { name: 'Contact', url: '#contact' },
  ];

  return <NavBar items={navItems} />;
}

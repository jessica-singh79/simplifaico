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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 flex gap-12 z-50">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.url}
          className="relative text-black font-heading font-bold text-xl md:text-2xl px-2 py-1 transition-all duration-300 
                     hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:underline"
        >
          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 
                            transition-opacity duration-300 rounded-md blur-lg group-hover:opacity-100" />
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

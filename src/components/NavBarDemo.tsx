import React from 'react';

type NavItem = {
  name: string;
  url: string;
};

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ items, className = '' }) => {
  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 flex gap-8 z-50 ${className}`}>
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.url}
          className="text-black font-heading font-semibold text-lg hover:text-indigo-600 transition-colors"
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

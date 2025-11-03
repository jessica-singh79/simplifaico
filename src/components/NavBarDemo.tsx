import React from 'react';
import { Home, User, Briefcase, HelpCircle, Mail } from 'lucide-react';

type NavItem = {
  name: string;
  url: string;
  icon: React.ElementType;
};

interface NavBarProps {
  items: NavItem[];
  className?: string;
  iconClassName?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ items, className = '', iconClassName = '' }) => {
  return (
    <nav className={`fixed top-6 right-6 flex gap-6 z-40 ${className}`}>
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <a key={idx} href={item.url} className="flex items-center gap-1 hover:underline">
            <Icon className={`w-4 h-4 ${iconClassName}`} />
            <span>{item.name}</span>
          </a>
        );
      })}
    </nav>
  );
};

export function NavBarDemo() {
  const navItems: NavItem[] = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'FAQ', url: '#faq', icon: HelpCircle },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  return <NavBar items={navItems} className="text-gray-800" iconClassName="text-gray-800" />;
}

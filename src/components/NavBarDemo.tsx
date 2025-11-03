import React from "react";
import { Home, User, Briefcase, HelpCircle, Mail } from "lucide-react";

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

export const NavBar: React.FC<NavBarProps> = ({ items, className = "", iconClassName = "" }) => {
  return (
    <nav className={`fixed top-6 right-6 z-40 flex gap-4 p-2 bg-white/5 backdrop-blur-md rounded-full shadow-lg ${className}`}>
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <a
            key={idx}
            href={item.url}
            className="group flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/20 hover:shadow-md"
          >
            <Icon className={`w-4 h-4 transition-colors duration-300 group-hover:text-white ${iconClassName}`} />
            <span className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-white">{item.name}</span>
          </a>
        );
      })}
    </nav>
  );
};

export function NavBarDemo() {
  const navItems: NavItem[] = [
    { name: "Home", url: "#hero", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Services", url: "#services", icon: Briefcase },
    { name: "FAQ", url: "#faq", icon: HelpCircle },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  return <NavBar items={navItems} className="" iconClassName="" />;
}

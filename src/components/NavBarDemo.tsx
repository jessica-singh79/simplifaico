import React from "react";

type NavItem = {
  name: string;
  url: string;
};

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ items, className = "" }) => {
  return (
    <nav
      className={`fixed top-6 right-6 z-50 flex gap-4 p-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg ${className}`}
    >
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.url}
          className="group px-4 py-2 rounded-full text-gray-800 font-medium text-sm transition-all duration-300 hover:bg-indigo-100 hover:shadow-md"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export function NavBarDemo() {
  const navItems: NavItem[] = [
    { name: "Home", url: "#hero" },
    { name: "About", url: "#about" },
    { name: "Services", url: "#services" },
    { name: "FAQ", url: "#faq" },
    { name: "Contact", url: "#contact" },
  ];

  return <NavBar items={navItems} />;
}

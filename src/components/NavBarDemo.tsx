import React from 'react'
import { Home, User, Briefcase, HelpCircle, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'FAQ', url: '#faq', icon: HelpCircle },
    { name: 'Contact', url: '#contact', icon: Mail }
  ]

  // Pass className prop to NavBar for white text and icons
  return <NavBar items={navItems} className="text-white" iconClassName="text-white" />
}

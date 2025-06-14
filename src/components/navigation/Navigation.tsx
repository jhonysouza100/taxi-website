"use client"

import {
  RiHeartLine,
  RiShoppingCartLine,
  RiUserLine,
  RiHeartFill,
  RiShoppingCartFill,
  RiUserFill,
  RiHomeSmile2Line,
  RiHomeSmile2Fill,
} from "@remixicon/react";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();

  const navItems = [
    {
      path: "#home",
      icon: RiHomeSmile2Line,
      activeIcon: RiHomeSmile2Fill,
      label: "Home",
    },
    {
      path: "#favorites",
      icon: RiHeartLine,
      activeIcon: RiHeartFill,
      label: "Favoritos",
    },
    {
      path: "#services",
      icon: RiShoppingCartLine,
      activeIcon: RiShoppingCartFill,
      label: "Services",
    },
    {
      path: "#reviews",
      icon: RiUserLine,
      activeIcon: RiUserFill,
      label: "Reseñas",
    },
    {
      path: "#cantact",
      icon: RiUserLine,
      activeIcon: RiUserFill,
      label: "Contacto",
    },
  ];

  return (
    <nav className="naviagtion w-full fixed bottom-4 z-50">
      <div 
        className="navigation_container max-w-max mx-auto flex justify-around items-center gap-2 rounded-xl bg-white/25 backdrop-filter backdrop-blur-sm shadow-sm">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const IconComponent = item.icon;

          return (
            <a
              aria-label={item.label}
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center justify-center rounded-xl ${
                isActive ? "bg-black" : ""
              } relative`}
            >
              <div
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isActive ? "text-white" : ""
                }`}
              >
                <IconComponent size={24} />
              </div>
            </a>
          );
        })}

      </div>
    </nav>
  );
}

export default Navigation;

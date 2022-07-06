import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const navigation = [
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Features", href: "/features" },
    { name: "News", href: "/news" },
  ];

  const [openHamburger, setOpenHamburger] = useState(false)

  return (
    <>
      {/* Mobile Menu */}
      <div className={`z-20 transition-transform ${openHamburger ? "translate-x-0" : "-translate-x-full"} absolute inset-0 pt-16 pl-8 md:hidden bg-green-200/[98%]`}>
        <nav className="m-6">
          <ul className="text-6xl text-gray-500">
            {navigation.map((nav) => (
              <li key={nav.name} className="my-16">
                <Link href={nav.href}>
                  <a className="pb-1 border-gray-700 hover:border-b-4 hover:text-gray-700">
                    {nav.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Nav */}
      <div className="flex justify-between items-center p-6 text-gray-700">
        <div className="flex items-center text-xl font-bold z-30">
          <button className="mr-4 md:hidden" onClick={() => setOpenHamburger(!openHamburger)}>
            <svg
              viewBox="0 0 100 80"
              width="20"
              height="20"
              className="fill-gray-600"
            >
              <rect width="100" height="20" rx="8"></rect>
              <rect y="30" width="100" height="20" rx="8"></rect>
              <rect y="60" width="100" height="20" rx="8"></rect>
            </svg>
          </button>
          <div>SocialEdge</div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex justify-between items-center text-gray-500">
            {navigation.map((nav) => (
              <li key={nav.name} className="mx-4">
                <Link href={nav.href}>
                  <a className="pb-1 border-gray-700 hover:border-b hover:text-gray-700">
                    {nav.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center">
          <Link href="/login">
            <a className="mr-4 p-1 border-b border-gray-400 ">Login</a>
          </Link>
          <Link href="/signup">
            <a className="border p-2 rounded shadow transition hover:scale-105">
              Signup
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

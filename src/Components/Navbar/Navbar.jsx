import React, { useState } from "react";
import logo from "/images/logo.png";
import "./Navbar.css";
import { FaBagShopping, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", text: "menu" },
    { href: "", text: "rewards" },
    { href: "", text: "locations" },
    { href: "", text: "gift cards" },
    { href: "", text: "Log in" },
  ];

  return (
    <>
      <div className="bg-prime py-0.5"></div>
      <nav className="md:border-b-0 border-b-2 sticky top-0 z-20 bg-footer">
        <div className="max-w-5xl mx-auto py-4 px-2 flex justify-between items-center">
          <button
            className="lg:hidden block"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars className="text-2xl" />
          </button>
          <div className="flex space-x-4 uppercase items-center">
            <a href="/">
              <img src={logo} alt="logo" className="w-16 h-10" />
            </a>
            <div className="space-x-4 uppercase items-center lg:flex hidden">
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  className="hover:border-b-2 transition-all ease-in-out"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="relative hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer">
              <FaBagShopping className="text-3xl" />
              <div className="absolute -top-1 -right-2 rounded-lg text-white bg-prime py-1 px-2 text-xs">
                1
              </div>
            </div>
            <button className="bg-prime hover:bg-red-600 btn text-white py-3 px-10 font-bold text-xs rounded-md uppercase lg:block hidden">
              Order now
            </button>
          </div>
        </div>
      </nav>
      <div
        className={` z-30 bg-footer fixed w-full transition-all duration-700 ease-in-out ${
          isOpen ? "top-[4.3rem]" : "top-[-90%]"
        }`}
      >
        <div className="flex-col space-y-4 uppercase flex">
          <a href="/" className="border-b w-full text-center py-2">
            order now
          </a>
          {navLinks.map((link) => (
            <a href={link.href} className="border-b w-full text-center py-2">
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

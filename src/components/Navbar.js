import React from "react";
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav className="w-16 h-16 bg-red-400">
      <p>Navbar</p>
      {/* Logo */}
      {/* User Sign in */}
      {/* Right Menu */}
      <FiMenu />
      <h1 className="text-2xl font-bold underline">Hello world!</h1>
    </nav>
  );
};

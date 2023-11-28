import { Link } from "gatsby";
import React from "react";

export type LayoutProps = {
  children: React.ReactNode
}

const NavLink: React.FC<{ name: string, to: string }> = ({ name, to }) => {
  return (
    <li className="inline-block px-4 py-5 tracking-wide hover:text-sky-600">
      <Link to={to}>
        {name}
      </Link>
    </li>
  );
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <nav className="w-full flex justify-center fixed opacity-90 bg-white text-sm">
        <ul>
          <NavLink name="HOME" to="/" />
          <NavLink name="CATEGORIES" to="/categories" />
          <NavLink name="TAGS" to="/tags" />
        </ul>
      </nav>

      <main className="container mx-auto sm:w-10/12 lg:w-full max-w-screen-lg pt-20">
        {children}
      </main>
    </>
  );
}


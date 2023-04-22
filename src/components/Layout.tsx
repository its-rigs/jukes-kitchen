import React from "react";

export type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <nav className="w-full flex justify-center">
        <ul>
          <li className="inline-block px-2">home</li>
          <li className="inline-block px-2">categories</li>
          <li className="inline-block px-2">tags</li>
        </ul>
      </nav>

      <main className="container mx-auto sm:w-10/12 lg:w-full max-w-screen-lg">
        {children}
      </main>
    </>
  );
}


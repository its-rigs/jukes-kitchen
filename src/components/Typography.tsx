import * as React from "react"

export const H1: React.FC<React.ComponentProps<'h1'>> = ({children}) => {
  return (
    <h1 className="text-3xl mb-3 md:text-5xl">{children}</h1>
  );
}

export const H2: React.FC<React.ComponentProps<'h2'>> = ({children}) => {
  return (
    <h1 className="text-2xl mb-3 md:text-3xl">{children}</h1>
  );
}

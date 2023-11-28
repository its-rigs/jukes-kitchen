import React from "react";
import { H1, H2 } from "../Typography";
import { CookTime, PrepTime, Quantity } from "../icons";

export type RecipeProps = {
  title: string;
  servings: string;
  cookTime: string;
  prepTime: string;
  children: React.ReactNode
}

const Detail: React.FC<{ logo: React.ReactNode, value: string }> = ({ logo, value }) => {
  return (

    <div className="sm:mr-5">
      <div className="leading-10 flex items-center justify-center sm:justify-start">
        {logo}
        <span className="pl-2">{value}</span>
      </div>
    </div>
  )
}

const RecipeIngredients: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="mb-6 ingredients">
      <H2>Ingredients</H2>

      {children}
    </section>
  )
}

const RecipeMethod: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="mb-6 col-span-2 method">
      <H2>Method</H2>

      {children}
    </section>
  )
}

const RecipeComponent: React.FC<RecipeProps> = ({ title, servings, cookTime, prepTime, children }) => {
  return (
    <article className="px-6 sm:px-0">
      <H1>{title}</H1>

      <section className="mb-3">
        <div className="grid grid-cols-3 sm:flex">
          <Detail logo={<Quantity />} value={servings} />
          <Detail logo={<PrepTime />} value={cookTime} />
          <Detail logo={<CookTime />} value={prepTime} />
        </div>
      </section>

      <section className="mb-6">
        <div className="grid grid-cols-4 sm:flex">
          <div className="sm:w-20">
            <div className="grid grid-rows-2 grid-flow-col">
              <span className="font-medium flex items-center justify-center">Calories:</span>
              <span className="flex items-center justify-center">204</span>
            </div>
          </div>
          <div className="sm:w-20">
            <div className="grid grid-rows-2 grid-flow-col">
              <span className="font-medium flex items-center justify-center">Protein:</span>
              <span className="flex items-center justify-center">204</span>
            </div>
          </div>
          <div className="sm:w-20">
            <div className="grid grid-rows-2 grid-flow-col">
              <span className="font-medium flex items-center justify-center">Carbs:</span>
              <span className="flex items-center justify-center">204</span>
            </div>
          </div>
          <div className="sm:w-20">
            <div className="grid grid-rows-2 grid-flow-col">
              <span className="font-medium flex items-center justify-center">Fat:</span>
              <span className="flex items-center justify-center">204</span>
            </div>
          </div>
        </div>
      </section>

      {children}
    </article >
  );
}

export const Recipe: any = Object.assign(RecipeComponent, {
  Ingredients: RecipeIngredients,
  Method: RecipeMethod
})

import React from "react";
import { H1, H2 } from "./Typography";
import { CookTime, PrepTime, Quantity } from "./icons";
import { PageProps } from "gatsby";

export const Recipe: React.FC = () => {
  return (
    <>
      <article className="px-8 sm:px-0">
        <H1>Cornflake Tart</H1>

        <section className="mb-6">
          <ul>
            <li className="md:inline-block md:mr-5">
              <div className="leading-10 flex items-center">
                <Quantity />
                <span className="pl-2">8-10 servings</span>
              </div>
            </li>

            <li className="md:inline-block md:mr-5">
              <div className="leading-10 flex items-center">
                <PrepTime />
                <span className="pl-2">20 min</span>
              </div>
            </li>

            <li className="md:inline-block md:mr-5">
              <div className="leading-10 flex items-center">
                <CookTime />
                <span className="pl-2">40 min</span>
              </div>
            </li>
          </ul>
        </section>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <section className="mb-6">
            <H2>Ingredients</H2>

            <ul className="list-disc list-inside">
              <li className="leading-9">320g ready-rolled shortcrust pastry</li>
              <li className="leading-9">plain flour, to dust</li>
              <li className="leading-9">50g butter</li>
              <li className="leading-9">125g golden syrup</li>
              <li className="leading-9">25g light brown soft sugar</li>
              <li className="leading-9">100g cornflakes</li>
              <li className="leading-9">125g strawberry or raspberry jam</li>
              <li className="leading-9">custard, to serve</li>
            </ul>
          </section>

          <section className="mb-6 col-span-2">
            <H2>Method</H2>

            <ol className="list-decimal list-inside">
              <li className="mb-6 leading-7">
                <p>Heat the oven to 180C/160C fan/gas 4. Unroll the pastry and briefly roll out on a lightly floured work surface until it's large enough to fit a 23cm loose-bottomed tart tin. Use the rolling pin to lift the pastry over the tin, then press into the corners and sides so the excess pastry hangs over the rim. Trim this away, leaving just a small amount of excess hanging over the rim.</p>
              </li>
              <li className="mb-6 leading-7">
                <p>Line the pastry with baking parchment and fill with baking beans or uncooked rice. Bake for 15 mins. Remove the parchment and beans, then bake for another 5-10 mins until just golden. Remove from the oven and trim any excess pastry from the edges using a serrated knife.</p>
              </li>
              <li className="mb-6 leading-7">
                <p>Heat the butter, syrup and sugar in a small pan with a pinch of salt, stirring frequently, until melted and smooth. Fold in the cornflakes to coat in the butter mixture.
                </p>
              </li>
              <li className="mb-6 leading-7">
                <p>Spoon the jam into the cooked pastry base, then level the surface.  Tip the cornflake mixture over the jam and gently press down until all of the jam is covered with a layer of the mixture. Return the tart to the oven and bake for another 5 mins until the cornflakes are golden and toasted. Leave to cool until just warm before slicing and serving with custard.</p>
              </li>
            </ol>
          </section>
        </div>

      </article >

    </>
  );
}

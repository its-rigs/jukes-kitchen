import React from "react"

import { RecipeIngredients, RecipeMethod, RecipeSection } from "../components/molecules";
import { Layout, RecipeOverview } from '../components/organisms'

export default function Home() {
  return (
    <Layout>
      <RecipeOverview title="Recipe Title" servings="8-10 servings" prepTime="20 min" cookTime="40 min" image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cornflake-cake-f773778.jpg" />

      <RecipeSection sectionId="recipe">
        <RecipeIngredients>
          <ul>
            <li>320g ready-rolled shortcrust pastry</li>
            <li>plain flour, to dust</li>
            <li>50g butter</li>
            <li>125g golden syrup</li>
            <li>25g light brown soft sugar</li>
            <li>100g cornflakes</li>
            <li>125g strawberry or raspberry jam</li>
            <li>custard, to serve</li>
          </ul>
        </RecipeIngredients>

        <RecipeMethod>
          <ol>
            <li>Heat the oven to 180C/160C fan/gas 4. Unroll the pastry and briefly roll out on a lightly floured work surface until it's large enough to fit a 23cm loose-bottomed tart tin. Use the rolling pin to lift the pastry over the tin, then press into the corners and sides so the excess pastry hangs over the rim. Trim this away, leaving just a small amount of excess hanging over the rim.</li>
            <li>Line the pastry with baking parchment and fill with baking beans or uncooked rice. Bake for 15 mins. Remove the parchment and beans, then bake for another 5-10 mins until just golden. Remove from the oven and trim any excess pastry from the edges using a serrated knife.</li>
            <li>Heat the butter, syrup and sugar in a small pan with a pinch of salt, stirring frequently, until melted and smooth. Fold in the cornflakes to coat in the butter mixture.</li>
            <li>Spoon the jam into the cooked pastry base, then level the surface. Tip the cornflake mixture over the jam and gently press down until all of the jam is covered with a layer of the mixture. Return the tart to the oven and bake for another 5 mins until the cornflakes are golden and toasted. Leave to cool until just warm before slicing and serving with custard.</li>
          </ol>
        </RecipeMethod>
      </RecipeSection>
    </Layout>
  );
}

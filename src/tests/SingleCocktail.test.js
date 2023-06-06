import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import SingleCocktail from "./SingleCocktail";

describe("SingleCocktail", () => {
  it("renders loading state when loading cocktail data", () => {
    render(
      <SingleCocktail />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders 'No cocktail to display' message when no cocktail data available", () => {
    render(
      <SingleCocktail />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByText("No cocktail to display")).toBeInTheDocument();
  });

  it("renders cocktail details when cocktail data is available", () => {
    const cocktailData = {
      name: "Mojito",
      image: "mojito.jpg",
      category: "Cocktail",
      glass: "Highball glass",
      instructions: "Mix ingredients and serve over ice.",
      ingredients: ["Rum", "Lime juice", "Mint leaves", "Sugar", "Soda water"]
    };

    render(
      <MemoryRouter initialEntries={[`/cocktails/${cocktailData.name}`]}>
        <Route path="/cocktails/:id">
          <SingleCocktail />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByText(cocktailData.name)).toBeInTheDocument();
    expect(screen.getByText(`Drink Type: ${cocktailData.category}`)).toBeInTheDocument();
    expect(screen.getByText(`Glass: ${cocktailData.glass}`)).toBeInTheDocument();
    expect(screen.getByText(`Ingredients: ${cocktailData.ingredients.join(", ")}`)).toBeInTheDocument();
    expect(screen.getByText(`Instructions: ${cocktailData.instructions}`)).toBeInTheDocument();
  });
});

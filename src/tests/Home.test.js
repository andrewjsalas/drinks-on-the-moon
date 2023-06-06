import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../pages/Home";

// Test for rendering and functionality of search bar
test("renders search bar and updates search term correctly", () => {
  render(<Home />);
  
  // Find the search input
  const searchInput = screen.getByPlaceholderText("Search cocktails");
  expect(searchInput).toBeInTheDocument();

  // Simulate user typing into the search input
  userEvent.type(searchInput, "margarita");
  
  // Verify that the search term is updated correctly
  expect(searchInput).toHaveValue("margarita");
});

// Test for fetching and displaying cocktails
test("fetches and displays cocktails based on search term", async () => {
  render(<Home />);

  // Mock the API fetch response
  global.fetch = jest.fn().mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce({
      drinks: [
        {
          idDrink: "1",
          strDrink: "Mojito",
          strDrinkThumb: "mojito-thumb.jpg",
          strAlcoholic: "Alcoholic",
          strGlass: "Highball glass",
        },
      ],
    }),
  });

  // Find the search input
  const searchInput = screen.getByPlaceholderText("Search cocktails");

  // Simulate user typing into the search input
  userEvent.type(searchInput, "mojito");

  // Wait for the API call and rendering to finish
  await screen.findByText("Mojito");

  // Verify that the cocktail is displayed
  expect(screen.getByText("Mojito")).toBeInTheDocument();
  expect(screen.getByAltText("Mojito")).toHaveAttribute("src", "mojito-thumb.jpg");
  expect(screen.getByText("Alcoholic")).toBeInTheDocument();
  expect(screen.getByText("Highball glass")).toBeInTheDocument();
});

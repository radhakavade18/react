import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "./mocks/resCard.json";
import "@testing-library/jest-dom"

it("Should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resCard={MOCK_DATA} />)

    const name = screen.getByText("MOJO Pizza - 2X Toppings");

    expect(name).toBeInTheDocument();
})
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./mocks/resListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
});

it("Should render the body component with search button", async () => {
    await act(async () => {
        render(<BrowserRouter><Body /></BrowserRouter>);
    })

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } })

    fireEvent.click(searchBtn);

    const resCard = screen.getAllByTestId("resCard");

    expect(resCard.length).toBe(1);
})

it("Should filter top rated restaurant", async () => {
    await act(async () => {
        render(<BrowserRouter><Body /></BrowserRouter>);
    })

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedButton = screen.getByRole('button', { name: "Top Rated Restaurants" });

    fireEvent.click(topRatedButton);

    const cardAfterFilter = screen.getAllByTestId("resCard");

    expect(cardAfterFilter.length).toBe(4);
})
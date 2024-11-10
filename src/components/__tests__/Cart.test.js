
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "./mocks/resMenu.json"
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/store/appStore"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it("it should load restaurant menu component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>));

    const accordionHeader = screen.getByText("Rice Bowlz (5)");
    fireEvent.click(accordionHeader);

    const foodItems = screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(5);

    const addButtons = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addButtons[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    fireEvent.click(addButtons[1]);

    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();


});
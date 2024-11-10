import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Contact us test cases", () => {
    // HELPER FUNCTIONS
    // beforeAll(() => {
    //     console.log("before all");
    // });

    // beforeEach(() => {
    //     console.log("before each");
    // })

    // afterAll(() => {
    //     console.log("after all");
    // });

    // afterEach(() => {
    //     console.log("after each");
    // })

    test("should load contact us component", () => {
        render(<Contact />);

        const header = screen.getByRole("heading");
        expect(header).toBeInTheDocument();
    })

    test("should load button inside contact component", () => {
        render(<Contact />);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })

    test("should load 2 inputbox inside contact component", () => {
        render(<Contact />);

        const textBox = screen.getAllByRole("textbox");
        expect(textBox.length).toBe(2);
    })
})
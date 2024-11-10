import sum from "../sum"

test("calculate sum", () => {
    const result = sum(3, 4);

    // assertion
    expect(result).toBe(7);
})
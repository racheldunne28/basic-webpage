const {calculatePrimeFactors} = require("./calcs")

test("Jest is working", () => {
    expect(1).toBe(1);
});

test("Test calculate prime factors fctn", () => {
    expect(calculatePrimeFactors(2)).toBe("It's prime!");
});
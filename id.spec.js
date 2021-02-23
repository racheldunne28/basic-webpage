test("Jest is working", () => {
    expect(1).toBe(1);
});

test("Test get new list value fctn", () => {
    expect(typeof getNewListValue()).toBe("string");
});
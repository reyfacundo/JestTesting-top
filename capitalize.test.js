import { capitalize } from "./capitalize";

it('Capitalizes a String', () => {
    const string = "hello"
    expect(capitalize(string)).toBe("Hello");
});

it('Already capitalized', () => {
    const string = "Hello"
    expect(capitalize(string)).toBe("Hello");
});

it('first letter being a space', () => {
    const string = " Hello"
    expect(capitalize(string)).toBe("Hello");
});

it('first not a valid letter', () => {
    const string = "_Hello"
    expect(capitalize(string)).toBe("Hello");
});

it('no string', () => {
    const string = ""
    expect(capitalize(string)).toBe("empty/invalid string");
});

it('invalid string', () => {
    const string = "*_"
    expect(capitalize(string)).toBe("empty/invalid string");
});
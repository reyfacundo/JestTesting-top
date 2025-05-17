import { reverseString } from "./reverseString";

it('Reverse a string', () => {
    const string = "hello"
    expect(reverseString(string)).toBe("olleh");
});

it('Reverse a string case sensitive', () => {
    const string = "HeLlo"
    expect(reverseString(string)).toBe("olLeH");
});

it('includes non letter', () => {
    const string = "Hel_lo"
    expect(reverseString(string)).toBe("ol_leH");
});

it('multiple words', () => {
    const string = "Hello World"
    expect(reverseString(string)).toBe("dlroW olleH");
});
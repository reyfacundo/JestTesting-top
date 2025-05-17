import { caesarCipher } from "./caesarCipher";

it('"ABC" to "CDE" - SHIFT 2', () => {
    expect(caesarCipher("abc", 2)).toBe("cde");
});

it('"ABC1" to "CDE1" - Receives non-letters - SHIFT 2', () => {
    expect(caesarCipher("abc1", 2)).toBe("cde1");
});

it('"ABC" to "DEF" - Goes past 26 letter boundary - SHIFT 29', () => {
    expect(caesarCipher("abc", 29)).toBe("def");
});

it('"ABC" to "VWX" - Goes past 26 letter boundary - SHIFT 310', () => {
    expect(caesarCipher("abc", 310)).toBe("yza");
});

it('"HeLLo" to "KhOOr" - Respects uppercases - SHIFT 3', () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

it('"HeLLo Everyone!" to "KhOOr Hyhubrqh!" - Respects symbols, spaces and uppercases- SHIFT 3', () => {
    expect(caesarCipher("HeLLo Everyone!", 3)).toBe("KhOOr Hyhubrqh!");
});
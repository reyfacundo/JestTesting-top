import { Calculator } from "./calculator";

it('sum two numbers', () => {
    const A = 2;
    const B = 5;
    expect(Calculator.add(A,B)).toBe(7);
});

it('substract two numbers', () => {
    const A = 0;
    const B = 2;
    expect(Calculator.substract(A,B)).toBe(-2);
});

it('divide two numbers', () => {
    const A = 5;
    const B = 2;
    expect(Calculator.divide(A,B)).toBe(2.5);
});

it('multiply two numbers', () => {
    const A = 6;
    const B = 2;
    expect(Calculator.multiply(A,B)).toBe(12);
});

it('divide a number by 0', () => {
    const A = 5;
    const B = 0;
    expect(Calculator.divide(A,B)).toBe("error");
});
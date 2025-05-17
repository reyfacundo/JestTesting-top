import { AnalyzeArray } from './analyzeArray'

it('Returns an object', () => {
    expect(AnalyzeArray.props([1,2,3])).toEqual(expect.any(Object));
});

it('Average of [1,2,3,4] to be 2.5', () => {
    expect(AnalyzeArray.average([1,2,3,4])).toBe(2.5);
});

it('Min of [7,2,3,4] to be 1', () => {
    expect(AnalyzeArray.min([7,2,3,4])).toBe(2);
});

it('Max of [1,2,3,4] to be 1', () => {
    expect(AnalyzeArray.max([1,2,3,4])).toBe(4);
});

it('Length of [1,2,3,4] to be 1', () => {
    expect(AnalyzeArray.length([1,2,3,4])).toBe(4);
});

it('Props of [1,2,3,4] to be { average: 2.5, min: 1, max: 4, length: 4 }', () => {
    expect(AnalyzeArray.props([1,2,3,4])).toStrictEqual({ "average": 2.5, "min": 1, "max": 4, "length": 4 });
});


it('Average of [1,8,3,4,2,6] to be 4', () => {
    expect(AnalyzeArray.average([1,8,3,4,2,6])).toBe(4);
});

it('Min of [1,8,3,4,2,6] to be 1', () => {
    expect(AnalyzeArray.min([1,8,3,4,2,6])).toBe(1);
});

it('Max of [1,8,3,4,2,6] to be 8', () => {
    expect(AnalyzeArray.max([1,8,3,4,2,6])).toBe(8);
});

it('Length of [1,8,3,4,2,6] to be 6', () => {
    expect(AnalyzeArray.length([1,8,3,4,2,6])).toBe(6);
});

it('Props of [1,8,3,4,2,6] to be { average: 4, min: 1, max: 8, length: 6 }', () => {
    expect(AnalyzeArray.props([1,8,3,4,2,6])).toStrictEqual({ "average": 4, "min": 1, "max": 8, "length": 6 });
});


import CalculateOfNubmer from "./calculateOfNumber";

const calculate: CalculateOfNubmer = new CalculateOfNubmer("123456");

test('Summa elements for string', () => {
    expect(calculate.getSummaElementFromNumber()).toBe(21);
})

test('Average element for a string', () => {
    expect(calculate.getAverageElementFromNumber()).toBe(3.5);
})

test('Max element for a string', () => {
    expect(calculate.getMaxElementFromNumber()).toBe(6);
})

test('Min element for a string', () => {
    expect(calculate.getMinElementFromNumber()).toBe(1);
})
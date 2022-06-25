import { it, expect } from 'vitest';

import { transformToNumber } from './numbers'

it('should transform string number to number of type number', () => {
  // Arrange
  const number = '1';


  // Act
  const result = transformToNumber(number);
  // const result = add(numbers);

  // Assert

  expect(result).toBeTypeOf('number');
});

it('should yield NaN for non-transformable values', () => {
  const input = 'invalid';
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

it('should work if a number is send', () => {
  // Arrange
  const number = 1;


  // Act
  const result = transformToNumber(number);
  // const result = add(numbers);

  // Assert
  const res = 1;

  expect(result).toBe(res);
});


it('should not throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    transformToNumber();
  };
  expect(resultFn).not.toThrow();
});

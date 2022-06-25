import { it, expect, describe } from 'vitest';

import { validateNumber, validateStringNotEmpty } from "./validation";

describe('validateStringNotEmpty()', () => {
  it('should validate string that length > 0 ', () => {

    const string = 'ab';

    const resultFn = () => {
      validateStringNotEmpty(string);
    };
    expect(resultFn).not.toThrow();
  });

  it('should throw error if string length === 0 ', () => {

    const string = '';

    const resultFn = () => {
      validateStringNotEmpty(string);
    };
    expect(resultFn).toThrow();

  });

  it('should throw an error, if an empty string is provided', () => {
  const input = '';
  const validationFn = () => validateStringNotEmpty(input);
  expect(validationFn).toThrow();
  });

  it('should throw an error with a message that contains a reason (must not be empty)', () => {
    const input = '';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow(/must not be empty/);
  });

  it('should throw an error if a long string of blanks is provided', () => {
    const input = '';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });

  it('should throw an error if any other value than a string is provided', () => {
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};

    const validationFnNum = () => validateStringNotEmpty(inputNum);
    const validationFnBool = () => validateStringNotEmpty(inputBool);
    const validationFnObj = () => validateStringNotEmpty(inputObj);

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });

  it('should not throw an error, if a non-empty string is provided', () => {
    const input = 'valid';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).not.toThrow();
  });
});

describe('validateNumber()', () => {

  it('should throw error if number is NaN', () => {

  const num = 'invalid';

  const resultFn = () => {
    validateNumber(num);
  };
  expect(resultFn).toThrow();

});

  it('should not throw error if number is not NaN', () => {

    const num = 1;

    const resultFn = () => {
      validateNumber(num);
    };
    expect(resultFn).not.toThrow();

  });

  it('should throw an error if NaN is provided', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  it('should throw an error with a message that contains a reason (invalid number)', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow(/Invalid number/);
  });

  it('should throw an error if a non-numeric value is provided', () => {
    const input = '1';
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  it('should not throw an error, if a number is provided', () => {
    const input = 1;
    const validationFn = () => validateNumber(input);
    expect(validationFn).not.toThrow();
  });

});

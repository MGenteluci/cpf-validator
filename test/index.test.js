const { isValid } = require('../index');

describe('CPF Validator Tests: ', () => {
  test('Expect 529.982.247-25 to be a valid CPF.', () => {
    expect(isValid('529.982.247-25')).toBe(true);
  });

  test('Expect 52998224725 to be a valid CPF.', () => {
    expect(isValid('52998224725')).toBe(true);
  });

  test('Expect 529..982.-247-25 to be a valid CPF.', () => {
    expect(isValid('529..982.-247-25')).toBe(true);
  });

  test('Expect 123.456.789-09 to be a valid CPF.', () => {
    expect(isValid('123.456.789-09')).toBe(true);
  });

  test('Expect 12345678909 to be a valid CPF.', () => {
    expect(isValid('12345678909')).toBe(true);
  });

  test('Expect 134.444.444-44 to be an ivalid CPF.', () => {
    expect(isValid('134.444.444-44')).toBe(false);
  });

  test('Expect 13444444444 to be an ivalid CPF.', () => {
    expect(isValid('13444444444')).toBe(false);
  });

  test('Expect 111.111.111-11 to be an invalid CPF.', () => {
    expect(isValid('111.111.111-11')).toBe(false);
  });

  test('Expect 11111111111 to be an invalid CPF.', () => {
    expect(isValid('11111111111')).toBe(false);
  });

  test('Expect 1 to be an invalid CPF.', () => {
    expect(isValid('1')).toBe(false);
  });

  test('Expect 152 to be an invalid CPF.', () => {
    expect(isValid('152')).toBe(false);
  });
});

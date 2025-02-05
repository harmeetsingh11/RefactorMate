const { sum, multiply } = require('../utils');

describe('Utility Functions', () => {
  describe('sum', () => {
    it('should return the sum of two numbers', () => {
      expect(sum(1, 2)).toBe(3);
      expect(sum(-1, -1)).toBe(-2);
      expect(sum(0, 0)).toBe(0);
    });

    it('should handle edge cases', () => {
      expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
      expect(sum(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(-2, -2)).toBe(4);
      expect(multiply(0, 5)).toBe(0);
    });

    it('should handle edge cases', () => {
      expect(multiply(Number.MAX_SAFE_INTEGER, 2)).toBe(Number.MAX_SAFE_INTEGER * 2);
      expect(multiply(Number.MIN_SAFE_INTEGER, 2)).toBe(Number.MIN_SAFE_INTEGER * 2);
    });
  });
});

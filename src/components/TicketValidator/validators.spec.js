import compact from 'lodash/compact';
import flatten from 'lodash/flatten';
import validators from './validators';

const ticket = [
  ['', '', 23, 40, 46, 57, '', 71, ''],
  ['', '', '', 34, '', 54, 64, 75, 89],
  [3, '', '', '', '', 59, 69, 76, 88],
];
const {
  fullHouse,
  corners,
  quickFive,
  topLine,
  middleLine,
  bottomLine,
} = validators;

describe('Ticket validators', () => {
  describe('full house', () => {
    const allNumbers = compact(flatten(ticket));
    it('identifies missing numbers', () => {
      expect(fullHouse(ticket, []).missingNumbers).toEqual(allNumbers);

      expect(
        fullHouse(ticket, [23, 34, 59, 69, 76, 88, 'x', 'x', 'x'])
          .missingNumbers,
      ).toEqual([40, 46, 57, 71, 54, 64, 75, 89, 3]);

      expect(
        fullHouse(ticket, [...allNumbers, 'x', 'x', 'x']).missingNumbers,
      ).toEqual([]);
    });

    it('provides valid numbers', () => {
      expect(fullHouse(ticket, []).validNumbers).toEqual([]);

      expect(
        fullHouse(ticket, [23, 34, 59, 69, 76, 88, 'x', 'x', 'x']).validNumbers,
      ).toEqual([23, 34, 59, 69, 76, 88]);

      expect(
        fullHouse(ticket, [...allNumbers, 'x', 'x', 'x']).validNumbers,
      ).toEqual(allNumbers);
    });

    it('marks the ticket as valid only if all numbers are checked', () => {
      expect(fullHouse(ticket, [...allNumbers, 'x', 'x', 'x']).valid).toBe(
        true,
      );

      expect(fullHouse(ticket, allNumbers.slice(0, 14)).valid).toBe(false);
    });
  });

  describe('top line', () => {
    const topLineNumbers = [23, 40, 46, 57, 71];
    it('identifies missing numbers', () => {
      expect(topLine(ticket, []).missingNumbers).toEqual(topLineNumbers);

      expect(topLine(ticket, [23, 'x', 'x', 57, 'x']).missingNumbers).toEqual([
        40,
        46,
        71,
      ]);

      expect(
        topLine(ticket, [...topLineNumbers, 'x', 'x', 'x']).missingNumbers,
      ).toEqual([]);
    });

    it('provides valid numbers', () => {
      expect(topLine(ticket, []).validNumbers).toEqual([]);

      expect(topLine(ticket, [23, 'x', 'x', 'x', 40]).validNumbers).toEqual([
        23,
        40,
      ]);

      expect(
        topLine(ticket, [...topLineNumbers, 'x', 'x', 'x']).validNumbers,
      ).toEqual(topLineNumbers);
    });

    it('marks the ticket as valid only if all top line numbers are checked', () => {
      expect(topLine(ticket, [...topLineNumbers, 'x', 'x', 'x']).valid).toBe(
        true,
      );

      expect(topLine(ticket, topLineNumbers.slice(0, 4)).valid).toBe(false);
    });
  });

  describe('middle line', () => {
    const middleLineNumbers = [34, 54, 64, 75, 89];
    it('identifies missing numbers', () => {
      expect(middleLine(ticket, []).missingNumbers).toEqual(middleLineNumbers);

      expect(
        middleLine(ticket, [34, 'x', 'x', 64, 'x']).missingNumbers,
      ).toEqual([54, 75, 89]);

      expect(
        middleLine(ticket, [...middleLineNumbers, 'x', 'x', 'x'])
          .missingNumbers,
      ).toEqual([]);
    });

    it('provides valid numbers', () => {
      expect(middleLine(ticket, []).validNumbers).toEqual([]);

      expect(middleLine(ticket, [54, 'x', 'x', 'x', 75]).validNumbers).toEqual([
        54,
        75,
      ]);

      expect(
        middleLine(ticket, [...middleLineNumbers, 'x', 'x', 'x']).validNumbers,
      ).toEqual(middleLineNumbers);
    });

    it('marks the ticket as valid only if all middle line numbers are checked', () => {
      expect(
        middleLine(ticket, [...middleLineNumbers, 'x', 'x', 'x']).valid,
      ).toBe(true);

      expect(middleLine(ticket, middleLineNumbers.slice(0, 4)).valid).toBe(
        false,
      );
    });
  });

  describe('bottom line', () => {
    const bottomLineNumbers = [3, 59, 69, 76, 88];
    it('identifies missing numbers', () => {
      expect(bottomLine(ticket, []).missingNumbers).toEqual(bottomLineNumbers);

      expect(bottomLine(ticket, [59, 'x']).missingNumbers).toEqual([
        3,
        69,
        76,
        88,
      ]);

      expect(
        bottomLine(ticket, [...bottomLineNumbers, 'x', 'x', 'x'])
          .missingNumbers,
      ).toEqual([]);
    });

    it('provides valid numbers', () => {
      expect(bottomLine(ticket, []).validNumbers).toEqual([]);

      expect(bottomLine(ticket, [59, 'x', 69]).validNumbers).toEqual([59, 69]);

      expect(
        bottomLine(ticket, [...bottomLineNumbers, 'x', 'x', 'x']).validNumbers,
      ).toEqual(bottomLineNumbers);
    });

    it('marks the ticket as valid only if all bottom line numbers are checked', () => {
      expect(
        bottomLine(ticket, [...bottomLineNumbers, 'x', 'x', 'x']).valid,
      ).toBe(true);

      expect(bottomLine(ticket, bottomLineNumbers.slice(0, 4)).valid).toBe(
        false,
      );
    });
  });

  describe('all corners', () => {
    const cornerNumbers = [23, 71, 3, 88];
    it('identifies missing numbers', () => {
      expect(corners(ticket, []).missingNumbers).toEqual(cornerNumbers);
      expect(corners(ticket, [23, 3, 5, 6, 7]).missingNumbers).toEqual([
        71,
        88,
      ]);
      expect(
        corners(ticket, [5, 6, 7, ...cornerNumbers]).missingNumbers,
      ).toEqual([]);
    });

    it('provides valid numbers', () => {
      expect(corners(ticket, []).validNumbers).toEqual([]);

      expect(corners(ticket, [23, 'x', 'x', 'x', 88]).validNumbers).toEqual([
        23,
        88,
      ]);

      expect(
        corners(ticket, [...cornerNumbers, 'x', 'x', 'x']).validNumbers,
      ).toEqual(cornerNumbers);
    });

    it('marks the ticket as valid only if all numbers are checked', () => {
      expect(corners(ticket, [...cornerNumbers, 'x', 'x', 'x']).valid).toBe(
        true,
      );

      expect(corners(ticket, cornerNumbers.slice(0, 3)).valid).toBe(false);
    });
  });

  describe('quick 5', () => {
    it('provides the first five matching numbers as valid numbers', () => {
      expect(quickFive(ticket, []).validNumbers).toEqual([]);

      expect(quickFive(ticket, [23, 'x', 'x', 'x', 88]).validNumbers).toEqual([
        23,
        88,
      ]);

      expect(
        quickFive(ticket, [23, 'x', 40, 46, 'x', 57, 54, 'x', 75, 89])
          .validNumbers,
      ).toEqual([23, 40, 46, 57, 54]);
    });

    it('marks the ticket as valid only if more than five checked numbers match', () => {
      expect(
        quickFive(ticket, [23, 'x', 40, 46, 'x', 57, 54, 'x', 75, 89]).valid,
      ).toBe(true);

      expect(quickFive(ticket, [23, 'x', 'x', 'x', 88]).valid).toBe(false);
    });
  });
});

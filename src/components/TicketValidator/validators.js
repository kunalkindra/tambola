import compact from 'lodash/compact';
import flatten from 'lodash/flatten';
import intersection from 'lodash/intersection';

function response(requiredNumbers, missingNumbers, valid, message) {
  return {
    valid,
    requiredNumbers,
    validNumbers: requiredNumbers.filter(
      (num) => !missingNumbers.includes(num),
    ),
    missingNumbers,
    message,
  };
}

function lineValidator(numbers, allCheckedNumbers, lineNumber) {
  const requiredNumbers = compact(numbers[lineNumber]);
  const missingNumbers = requiredNumbers.filter(
    (num) => !allCheckedNumbers.includes(num),
  );
  return response(requiredNumbers, missingNumbers, !missingNumbers.length);
}

const validators = {
  corners(numbers, allCheckedNumbers) {
    const [first, , , , second] = compact(numbers[0]);
    const [third, , , , fourth] = compact(numbers[2]);

    const requiredNumbers = [first, second, third, fourth];
    const missingNumbers = requiredNumbers.filter(
      (num) => !allCheckedNumbers.includes(num),
    );
    return response(requiredNumbers, missingNumbers, !missingNumbers.length);
  },

  quickFive(numbers, allCheckedNumbers) {
    const allTicketNumbers = compact(numbers[0])
      .concat(compact(numbers[1]))
      .concat(compact(numbers[2]));
    const matchingNumbers = intersection(allTicketNumbers, allCheckedNumbers);
    const requiredNumbers = matchingNumbers.slice(0, 5);
    return response(requiredNumbers, [], requiredNumbers.length >= 5);
  },

  topLine(numbers, allCheckedNumbers) {
    return lineValidator(numbers, allCheckedNumbers, 0);
  },
  middleLine(numbers, allCheckedNumbers) {
    return lineValidator(numbers, allCheckedNumbers, 1);
  },
  bottomLine(numbers, allCheckedNumbers) {
    return lineValidator(numbers, allCheckedNumbers, 2);
  },
  fullHouse(numbers, allCheckedNumbers) {
    const line1 = lineValidator(numbers, allCheckedNumbers, 0);
    const line2 = lineValidator(numbers, allCheckedNumbers, 1);
    const line3 = lineValidator(numbers, allCheckedNumbers, 2);
    const missingNumbers = [
      ...line1.missingNumbers,
      ...line2.missingNumbers,
      ...line3.missingNumbers,
    ];
    return response(
      compact(flatten(numbers)),
      missingNumbers,
      !missingNumbers.length,
    );
  },
};

export default validators;

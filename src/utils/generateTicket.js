import shuffle from './shuffle';
import getXRandomElements from './getXRandomElements';

function getColumn(ticket, number) {
  return ticket.map((row) => row[number]);
}

function updateColumn(ticket, column, colIndex) {
  ticket.forEach((row, index) => {
    row[colIndex] = column[index];
  });
}

function getNumbersForColumn(colIndex) {
  const numbers = [];
  const lastNumber = 10 * (colIndex + 1);
  const startNumber = lastNumber - 9;
  for (let i = startNumber; i <= lastNumber; i++) numbers.push(i);
  return numbers;
}

export default function generateTicket() {
  const positionsInARow = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const positionsToFill = [
    getXRandomElements(positionsInARow, 5),
    getXRandomElements(positionsInARow, 5),
    getXRandomElements(positionsInARow, 5),
  ];
  const ticket = positionsToFill.map((rowPositionsToFill) =>
    positionsInARow.map((p) => (rowPositionsToFill.includes(p) ? 'x' : '')),
  );

  positionsInARow.forEach((colIndex) => {
    const numbersForColumn = shuffle(getNumbersForColumn(colIndex));
    const filledColumn = getColumn(ticket, colIndex).map((val) =>
      val === 'x' ? numbersForColumn.pop() : val,
    );
    updateColumn(ticket, filledColumn, colIndex);
  });
  return ticket;
}

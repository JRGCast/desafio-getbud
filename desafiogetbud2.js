// Arquivo Limpo
const returnBiggest = (number) => {
  let biggest = [];
  const separating = number.toString().split('').map(Number);
  for (let i = 0; i < separating.length; i++) {
    if (separating[i] > 0 && separating[i] < 9) {
      if (separating[i - 1] === separating[i] - 1 || separating[i + 1] === separating[i] + 1) {
        biggest.push(String(separating[i]));
      } else {
        biggest.push('-');
      }
    }
    // Por conta da especificidade da continuação 9 -> 0
    if (separating[i] === 9) {
      if (separating[i + 1] === 0 || separating[i - 1] === 8) {
        biggest.push(String(separating[i]));
      } else {
        biggest.push('-');
      }
    }
    if (separating[i] === 0) {
      if (separating[i + 1] === 1 || separating[i - 1] === 9) {
        biggest.push(String(separating[i]));
      } else {
        biggest.push('-');
      }
    }
  };
  let result = Math.max(...biggest.join('', [separator = '-']).split('-').map(Number));
  return result;
};
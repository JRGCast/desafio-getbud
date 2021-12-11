// O dia antes de dois dias após o dia antes de amanhã é Quarta-feira. Que dia é hoje?

// O dia antes de amanhã é hoje, logo === O dia antes de dois dias após hoje é Quarta-feira? Que dia é hoje?

// Se é um dia antes de dois dias após hoje (vai dois e volta um), então o dia de amanhã é Quarta-feira. Logo, o dia de hoje é Terça-feira

// Meus diferenciais: Por ter trabalhado no direito, tenho experiência com o atendimento humano, ou seja, possuo diversas soft skills tais como escuta ativa, empatia, capacidade de negociação, facilidade na comunicação, tolerância à frustrações, sei trabalhar sob pressão, etc. Além disso, fiz o curso Trybe, onde ensinam, entre inúmeras soft e hard skills, a mais importante habilidade de um programador: aprender a aprender, isso junto com persistência faz um potencial ilimitado.

// Crie uma função que recebe um número qualquer e encontra o maior número formado por dígitos consecutivos naquele número.

let testNum1 = 53590;
let testNum2 = 674030098567819;
let testNum3 = 9012364509789;
let testNum4 = 901234567890;
let testNum5 = 123405670;

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
  return `O maior número formado por dígitos consecutivos dentro de ${number} é => ${result}.`;
};
console.log(returnBiggest(testNum1));
console.log(returnBiggest(testNum2));
console.log(returnBiggest(testNum3));
console.log(returnBiggest(testNum4));
console.log(returnBiggest(testNum5));
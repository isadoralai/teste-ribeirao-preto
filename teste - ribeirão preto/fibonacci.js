function fibonacciCalc(num) {
    let sequence = [0, 1];
    let i = 2;

    while (sequence[i - 1] + sequence[i - 2] <= num) {
      let proximoNumero = sequence[i - 1] + sequence[i - 2];
      sequence.push(proximoNumero);
      i++;
    }

    return sequence;
  }

  const readline = require('readline-sync');

  // Solicit o usuário para informar um número
  const num = parseInt(readline.question('Digite um numero: '));

  // Chama a função para calcular a sequência até o número informado
  const sequence = fibonacciCalc(num);

  // Imprime a sequência
  console.log(`Sequência de Fibonacci até ${num}: ${sequence.join(', ')}`);

  // Verifica se o número está na sequência de Fibonacci
  const isInSequence  = sequence.includes(num);

  if (isInSequence) {
    console.log(`${num} faz parte da sequência de Fibonacci.`);
  } else {
    console.log(`${num} não faz parte da sequência de Fibonacci.`);
  }
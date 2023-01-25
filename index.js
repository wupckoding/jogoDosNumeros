let menu = 0;
while (menu < 5) {
  menu = prompt(`Bem-Vindo ao jogo dos números.
  
  Digite:
  
  1 - para somar dois números;
  2 - para subtrair dois números;
  3 - para multiplicação dos dois números;
  4 - para dividir os dois números;
  5 - para sair do jogo
  
  `);

  function isOdd(num, type, numberOne, numberTwo) {
    if (num % 2 === 0) {
      alert(
        `A ${type} de ${numberOne} e ${numberTwo} = ${num} e o número é par`
      );
    } else {
      alert(
        `A ${type} de ${numberOne} e ${numberTwo} = ${num} e o número é ímpar`
      );
    }
  }

  if (menu == 1) {
    let numberOne = prompt("Digite um número");
    let numberTwo = prompt("Digite outro número");
    let result = Number(numberOne) + Number(numberTwo);
    isOdd(result, "soma", numberOne, numberTwo);
    if (numberOne == numberTwo) {
      alert("Seus números são iguais");
    } else {
      alert("Seus números são diferentes");
    }
  } else if (menu == 2) {
    let numberOne = prompt("Digite um número");
    let numberTwo = prompt("Digite outro número");
    let result = Number(numberOne) - Number(numberTwo);
    isOdd(result, "subtração", numberOne, numberTwo);
    if (numberOne == numberTwo) {
      alert("Seus números são iguais");
    } else {
      alert("Seus números são diferentes");
    }
  } else if (menu == 3) {
    let numberOne = prompt("Digite um número");
    let numberTwo = prompt("Digite outro número");
    let result = Number(numberOne) * Number(numberTwo);
    isOdd(result, "multiplicação", numberOne, numberTwo);
    if (numberOne == numberTwo) {
      alert("Seus números são iguais");
    } else {
      alert("Seus números são diferentes");
    }
  } else if (menu == 4) {
    let numberOne = prompt("Digite um número");
    let numberTwo = prompt("Digite outro número");
    let result = (Number(numberOne) / Number(numberTwo)).toFixed(2);
    isOdd(result, "divisão", numberOne, numberTwo);
    if (numberOne == numberTwo) {
      alert("Seus números são iguais");
    } else {
      alert("Seus números são diferentes");
    }
  } else if (menu == 5) {
    alert("Você saiu da aplicação, até a proxima!");
  } else {
    alert("digite um número válido...");
  }
}

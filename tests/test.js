const calcularJurosCompostos = require('../src/calculo');
console.assert(calcularJurosCompostos(1000, 0.05, 2) === 1102.5, 'Teste 1 falhou');
console.assert(calcularJurosCompostos(1000, -0.05, 2) === 902.5, 'Teste 2 falhou');
console.log('Todos os testes passaram.');

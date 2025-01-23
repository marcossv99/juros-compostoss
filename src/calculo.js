function calcularJurosCompostos(principal, taxa, tempo) {
    return principal * Math.pow(1 + taxa, tempo);
}
module.exports = calcularJurosCompostos;

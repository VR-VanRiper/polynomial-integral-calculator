const readline = require('readline-sync');

function integralTentu() {
    
    const polynomial = require('./polynomial.js');
    const [koef, pang, suku, varPol] = polynomial();

console.log("");
console.log("");
let valBawah, valAtas;
while (!Number.isInteger(valBawah)) {
  valBawah = Number(readline.question("Masukkan batas bawah: "));
  if (!Number.isInteger(valBawah)) {
    console.log("Masukkan harus berupa bilangan bulat!");
  }
}
while (!Number.isInteger(valAtas)) {
  valAtas = Number(readline.question("Masukkan batas atas: "));
  if (!Number.isInteger(valAtas)) {
    console.log("Masukkan harus berupa bilangan bulat!");
  }
}

console.log("");
console.log(`Hasil integral tentunya untuk batas bawah = ${valBawah} dan batas atas = ${valAtas} adalah: `);

let i;
for (i = suku; i > 0; i--) {
  let pangInteg = pang[i] + 1;

  process.stdout.write(`(${koef[i]}/${pangInteg})${varPol}^${pangInteg}`);

  if (koef[i - 1] > 0) {
    process.stdout.write("+");
  }
}

process.stdout.write(" = ");
for (i = suku; i > 0; i--) {
  let pangInteg = pang[i] + 1;
  if (pang[i] !== -1) {
    process.stdout.write(`(${koef[i]}/${pangInteg})(${valAtas})^${pangInteg}`);
  }
  if (pang[i] === -1) {
    process.stdout.write(`${koef[i]}ln(|${valAtas}|)`);

  }

  if (koef[i - 1] > 0) {
    process.stdout.write("+");
  }
}
process.stdout.write("-");
for (i = suku; i > 0; i--) {
  let pangInteg = pang[i] + 1;
  if (pang[i] !== -1) {
    process.stdout.write(`((${koef[i]}/${pangInteg})(${valBawah})^${pangInteg})`);
  }
  if (pang[i] === -1) {
    process.stdout.write(`${koef[i]}ln(|${valBawah}|)`);
  }

  if (koef[i - 1] > 0) {
    process.stdout.write("+");
  }
}

process.stdout.write(" = ");
let hasilIntegTentu = 0;

for (i = suku; i > 0; i--) {
  if (pang[i] !== -1) {
    koef[i] = (koef[i] / (pang[i] + 1)) * Math.pow(valAtas, pang[i] + 1) - (koef[i] / (pang[i] + 1)) * Math.pow(valBawah, pang[i] + 1);
  }
  if (pang[i] === -1) {
    koef[i] = koef[i] * Math.log(valAtas) - (koef[i] * Math.log(valBawah));
  }
}

for (i = suku; i > 0; i--) {
  hasilIntegTentu = hasilIntegTentu + koef[i];
}

console.log(hasilIntegTentu);


}

module.exports = integralTentu;
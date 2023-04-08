const readline = require('readline-sync');

function integralTaktentu() {
    
    const polynomial = require('./polynomial.js');
    const [koef, pang, suku, varPol] = polynomial();

console.log("");

console.log("Hasil integral tak tentunya adalah: ");
for (let i = suku; i > 0; i--) {
  let panginteg = pang[i] + 1;
  if (pang[i] !== -1) {
    if (koef[i] !== 0) {
      if (koef[i] % panginteg !== 0) {
        process.stdout.write(`(${koef[i]}/${pang[i] + 1})`);
        if (pang[i] !== -1) {
          process.stdout.write(`${varPol}^${pang[i] + 1}`);
        }
      } else {
        if (koef[i] % panginteg !== 1) {
          process.stdout.write(`${koef[i] / (pang[i] + 1)}`);
        }
        if (pang[i] !== -1) {
          process.stdout.write(`${varPol}^${pang[i] + 1}`);
        }
      }
    }
  }

  if (pang[i] === -1) {
    process.stdout.write(`${koef[i]}ln(|${varPol}|)`);
  }

  if (koef[i - 1] !== 0) {
    process.stdout.write("+");
  }
}
console.log("C");
}

module.exports = integralTaktentu;
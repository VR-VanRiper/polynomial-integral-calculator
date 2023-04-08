const readlineSync = require('readline-sync');

function polim() {
  let suku;
  let varPol;

  while (true) {
    suku = parseInt(readlineSync.question('Masukkan jumlah suku dalam polinomial: '));
    if (isNaN(suku) || suku <= 0) {
      console.log('Masukkan invalid, coba kembali');
    } else {
      break;
    }
  }

  while (true) {
    varPol = readlineSync.question('Masukkan variabel dari polinomial: ');
    if (!varPol.match(/^[a-zA-Z]+$/)) {
      console.log('Masukkan invalid, coba kembali. Variabel hanya bisa berupa huruf!');
    } else {
      break;
    }
  }

  return [suku, varPol];
}

module.exports = polim;
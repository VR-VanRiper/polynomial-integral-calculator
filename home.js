const readline = require('readline-sync');

console.log("");
console.log("********************************************************** \n");
console.log("******** WELCOME TO INTEGRAL POLYNOMIAL CALCULATOR! ****** \n");
console.log("******************** BY ANDAKARA ATHAY SIDIQ ************* \n");
let pilInteg;
let ulangpilInteg;

function pilpolIntegral() {
  do {
    console.log("");
    console.log("Masukkan pilihan Integral untuk bentuk polinomial satu variabel: \n");
    console.log("1. Integral tak tentu \n");
    console.log("2. Integral tentu \n");
    console.log("Masukkan 0 untuk membatalkan pilihan. \n");
    pilInteg = parseInt(readline.question("Pilihan anda: "));

    if (pilInteg !== 1 && pilInteg !== 2 && pilInteg !== 0) {
      console.log("");
      console.log("Masukkan invalid, coba kembali.");
      continue;
    }

    switch (pilInteg) {
      case 1:
        console.log("");
        console.log("Anda memilih *Integral tak tentu*");
        const integralTaktentu = require('./integralTaktentu');
        integralTaktentu();
        break;
      case 2:
        console.log("");
        console.log("Anda memilih *Integral tentu*");
        const integralTentu = require('./integralTentu');
        integralTentu();
        break;
      case 0:
        console.log("");
        console.log("Anda membatalkan pilihan. \n");
        return;
      default:
        console.log("");
        console.log("Masukkan invalid, coba kembali.");
        continue;
    }

    console.log("");

    function ulangkalkulasi() {
      console.log("");
      ulangpilInteg = readline.question("Ulangi pilihan (y/t)? ");
      switch (ulangpilInteg) {
        case 'y':
          console.clear();
          break;
        case 't':
          break;
        default:
          console.log("Mohon untuk menjawab kembali dengan benar." + "\n");
          ulangkalkulasi();
      }
    }

    ulangkalkulasi();
  } while (ulangpilInteg != 't');
}

pilpolIntegral();

console.log("");
console.log("See You!");
console.log("");

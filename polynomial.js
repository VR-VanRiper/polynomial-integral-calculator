const readline = require('readline-sync');
function polynomial() {
    console.log("");
    let suku;
    let varPol;

    while (true) {
      suku = parseInt(readline.question('Masukkan jumlah suku dalam polinomial: '));
      if (isNaN(suku) || suku <= 0) {
        console.log('Masukkan invalid, coba kembali');
      } else {
        break;
      }
    }

    while (true) {
      varPol = readline.question('Masukkan variabel dari polinomial: ');
      if (!varPol.match(/^[a-zA-Z]+$/)) {
        console.log('Masukkan invalid, coba kembali. Variabel hanya bisa berupa huruf!');
      } else {
        break;
      }
    }

    console.log("");

    let koef = [];
    let pang = [];
  
    for (let i = suku; i > 0; i--) {
      console.log("");
      process.stdout.write(`Masukkan koefisien dari suku ke-${i} untuk variabel ${varPol}: `);
      koef[i] = parseInt(readline.question(""));
      process.stdout.write(`Masukkan eksponen dari suku ke-${i} untuk variabel ${varPol}: `);
      pang[i] = parseInt(readline.question(""));
      while (isNaN(koef[i]) || isNaN(pang[i])) {
        console.log("");
        console.log("Invalid input, coba kembali.");
        console.log("Mohon untuk mengulang masukkan dari awal dengan benar!");
        console.log("");
        process.stdout.write(`Masukkan koefisien dari suku ke-${i} untuk variabel ${varPol}: `);
        koef[i] = parseInt(readline.question(""));
        process.stdout.write(`Masukkan eksponen dari suku ke-${i} untuk variabel ${varPol}: `);
        pang[i] = parseInt(readline.question(""));
      }
    }
  
    console.log("");
    console.log("Bentuk polinomialnya adalah: ");
    for (let i = suku; i > 0; i--) {
      if (koef[i] !== 0) {
        process.stdout.write(`${koef[i]}`);
        if (pang[i] !== 0) {
          process.stdout.write(`${varPol}^${pang[i]}`);
        }
      }
      if (koef[i - 1] > 0) {
        process.stdout.write("+");
      }
    }
  
    console.log("");
  
    return [koef, pang, suku, varPol];
  }
  

module.exports = polynomial;

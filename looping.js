// console.log("Nama saya Dzaki");
// console.log("Nama saya Dzaki");
// console.log("Nama saya Dzaki");
// console.log("Nama saya Dzaki");
// console.log("Nama saya Dzaki");

//let total = 0;
//for (let i = 10; i <=20; i+=2) {
    //total = total + i;
    //console.log(`i=${i} -> total =${total}`); 
//


//let nilai = [80, 90, 100, 70, 60]; 
//for (let i = 0; i < nilai.length; i++) {
//    if (nilai[i] >= 90) {
//        console.log(`Nilainya = ${nilai[i]} " - Sangat Bagus (Lulus)"`);
//    } else if (nilai[i] >= 80) {
//        console.log(`Nilainya = ${nilai[i]} " - Bagus (Lulus)"`);
//    } else {
//        console.log(`Nilainya = ${nilai[i]} " - Kurang (Tidak Lulus)"`);
//    }
//
//}

//let nama = ["Andi", "Budi", "Citra", "Doni", "Eka"];
//let nilai = [85, 60, 90, 72, 45];
//for (let i = 0; i < nama.length; i++) {
    //if (nilai[i] >= 80) {
      //  console.log(nama[i] + " - " + nilai[i] + " - Lulus");
   // } else {
     //   console.log(nama[i] + " - " + nilai[i] + " - Tidak Lulus");
    //}
//}

let angka = [12, 7, 20, 15, 8, 3, 14, 9];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 === 0 && angka[i] >= 10) {
        console.log(angka[i] + " - Genap - >= 10");
    } else {
        console.log(angka[i] + " - Lainnya");
    }
}

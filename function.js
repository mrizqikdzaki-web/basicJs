function belajar(materi) {
    console.log("belajar " + materi);
}

function salam(nama) {
    console.log("Assalamualaikum, " + nama);
}

// belajar("HTML");
// belajar("CSS");
// belajar("JavaScript");

function tambah(a, b, c) {
    console.log(a + b + c);
}

// tambah(60, 30, 20);
// tambah(70, 10, 20);
// tambah(80, 20, 50);

function tambahKaliBagi(a, b, c) {
    console.log((a * b) / c);
}
function tambahBagiKali(a, b, c) {
    console.log((a / b) * c);
}
function tambahPangkatBagi(a, b, c) {
    console.log((a ** b) / c);
}

// tambahKaliBagi(60, 30, 2);       
// tambahBagiKali(70, 10, 20);     
// tambahPangkatBagi(2 ** 8, 1, 2); 

function hitungTotal(harga, jumlah) {
    return harga * jumlah;
}

// let hargaApelPerBuah = 10000;
// let totalPembelian = 3
// let total = hitungTotal(hargaApelPerBuah, 3);
// let diskon = 5000;

// console.log("Harga Apel Per Buah = " + hargaApelPerBuah);
// console.log("Jumlah Pembelian = " + totalPembelian);
// console.log("Diskon = " + diskon);
// console.log("Harga bayar: " + (total - diskon));


function hitungTotal(harga, jumlah) {
//    console.log(`Harga Apel perbuah: ${harga}, Jumalh: ${jumlah}`);
    return harga * jumlah;
}

// let total = hitungTotal(10000, 3);
// let diskon = 5000;
// let bayar = total - diskon;

// console.log("Diskon = " + diskon);
// console.log("Harga bayar = " + bayar);

function hitungLuasLingkaran(phi, r) {
    let luas = phi * (r ** 2);
    return luas;
}

function hitungKelilingLingkaran(phi, r) {
    let keliling = 2 * phi * r;
    return keliling;
}

// let luas = hitungLuasLingkaran(3.14, 7);
// let keliling = hitungKelilingLingkaran(3.14, 7);

// console.log("Luas Lingkaran = " + luas);
// console.log("Keliling Lingkaran = " + keliling);

function hitungVolumeBalok(p, l, t) {
    let volume = p * l * t;
    return volume;
}

// let volumeBalok = hitungVolumeBalok(17, 5, 10);

// console.log("Volume Balok = " + volumeBalok);

const tambah2 = (a, b) => {
    return a + b;
};

// console.log(tambah2(5, 2));

const hitungVolumeBalok2 = (p, l, t) => {
    return p * l * t;
}

// console.log(hitungVolumeBalok2(17, 5, 10));

const hitungTotalBuah = (harga, jumlah) => {
    console.log(`Harga Apel perbuah: ${harga}, Jumalh: ${jumlah}`);
    return harga * jumlah;
}

// let total = hitungTotalBuah(5000, 4);
// let diskon = 2000;
// let bayar = total - diskon;

// console.log("Diskon = " + diskon);
// console.log("Harga bayar = " + bayar);

function tampilkanUmur () {
    let umur = 17;
    console.log(umur);
}

// tampilkanUmur();

// console.log(umur); // error

let beratBadan = 70;

function tampilkanBeratBadan(){
    console.log(beratBadan);
}

tampilkanBeratBadan();
console.log(beratBadan);
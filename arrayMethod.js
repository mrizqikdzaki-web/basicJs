// // const nilai = [80, 75, 90, 85, 70, 65, 70, 50, 55, 69];
// // nilai.forEach((angka) => {
// //     console.log(angka);   
// // });

// // nilai.forEach((angka) => {
// //     if (angka >= 75) {
// //         console.log(angka + " - Lulus");
// //     } else {
// //         console.log(angka + " - Remidial");
// //     }
// // });

// // const baru = ["Harry", "Ron", "Hermione", "Draco", "Neville", "Luna", "Fred", "George", "Cho", "Cedric"];
// // baru.forEach((nama) => {
// //     console.log("halo " + nama);
// // });



// // nilai.forEach((angka) => {
// //     if (angka >= 75) {
// //         // console.log(angka+ 5 + " - Lulus");
// //     } else {
// //         console.log(angka + 5 + " - Remidial");
// //     }
// // });

// // const siswa = [
// //     { nama: "Harry", alamat: "London", umur: 19, kelas: "Menengah-atas" },
// //     { nama: "Ron", alamat: "Heatrow", umur: 19, kelas: "Menengah-atas" },
// //     { nama: "Hermione", alamat: "Birmingham", umur: 18, kelas: "Menengah-atas" }
    
// // ];

// // const namaSaja = siswa.map((namaDoang) => namaDoang.nama);
// // console.log(namaSaja);
// // const umurSaja = siswa.map((umurDoang) => umurDoang.umur);
// // console.log(umurSaja);
    
// const nilaiBaru = [80, 95, 90, 70, 85, 75, 60, 50, 55, 69];
// const nilaiTidakLulus = nilaiBaru.filter((angka) => {
//     return angka < 75;
// });
// // console.log(nilaiTidakLulus);

// const arrayAngka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const angkaGenap = arrayAngka.filter((angka) => {
//     return angka % 2 === 0;
// });
// // console.log(angkaGenap);

// const angkaGanjil = arrayAngka.filter((angka) => {
//     return angka % 2 !== 0;
// });
// // console.log(angkaGanjil);

const warTicket = [
    { nama: "Konser", jumlah: 300, dipesan: 200 },
    { nama: "Seminar", jumlah: 100, dipesan: 90 },
    { nama: "Workshop", jumlah: 80, dipesan: 80 }
];

// const sisaTicket = warTicket.filter((ticket) => {
//     return ticket.jumlah - ticket.dipesan >= 10;
// });
// console.log(sisaTicket);

// const sisaTicketHabis = warTicket.filter((ticket) => {
//     return ticket.jumlah - ticket.dipesan === 0;
// });
// console.log(sisaTicketHabis);

// const bukanKonser = warTicket.find((ticket) => {
//     return ticket.jumlah - ticket.dipesan !== 0 && ticket.nama !== "Konser";
// });
// console.log(bukanKonser);

const siswa = [
    { nama: "Andi", nilai: 80 },
    { nama: "Budi", nilai: 65 },
    { nama: "Citra", nilai: 90 },
    { nama: "Dina", nilai: 75 },
    { nama: "Eko", nilai: 85 }
];

// siswa.forEach((s) => {
//     if (s.nilai >= 75) {
//         console.log(s.nama + " - " + s.nilai + " - Lulus");
//     } else {
//         console.log(s.nama + " - " + s.nilai + " - Remidial");
//     }
// })

const produk = [
    { nama: "Mouse", harga: 100000},
    { nama: "Keyboard", harga: 150000},
    { nama: "Headset", harga: 200000},
    { nama: "Flashdisk", harga: 50000},
    { nama: "Webcam", harga: 250000}
];

// const hargaPromo = produk.map((p) => {
// return {nama: p.nama, harga: p.harga - (p.harga * 0.1)};
// });
// console.log(hargaPromo)

const calonAnggota = [
    { nama: "Andi", nilai: 85,kehadiran: 90 },
    { nama: "Budi", nilai: 75,kehadiran: 95 },
    { nama: "Citra", nilai: 90,kehadiran: 85 },
    { nama: "Dina", nilai: 80,kehadiran: 70 },
    { nama: "Eko", nilai: 88,kehadiran: 100 },
    { nama: "Fajar", nilai: 70,kehadiran: 75 }
];

const anggotaTerpilih = calonAnggota.filter((terpilih) => {
    return terpilih.nilai >= 80 && terpilih.kehadiran >= 80;
});

// anggotaTerpilih.forEach((terpilih) => {
//     console.log(terpilih.nama);
// });
// console.log('Jumlah anggota terpilih: ' + anggotaTerpilih.length);

const inventaris = [
    { kode: "PC001", nama: "Komputer 1", kondisi: "Baik" },
    { kode: "PC002", nama: "Komputer 2", kondisi: "Rusak" },
    { kode: "PC003", nama: "Komputer 3", kondisi: "Baik" },
    { kode: "PC004", nama: "Komputer 4", kondisi: "Perbaikan" },
    { kode: "PC005", nama: "Komputer 5", kondisi: "Baik" }
];

const hasilCari = inventaris.find((item) => {
    return item.kode === "PC003";
});

if (hasilCari) {
    console.log("Nama perangkat: " + hasilCari.nama);
    console.log("Kondisi: " + hasilCari.kondisi);
} else {
    console.log("Perangkat tidak ditemukan");
}


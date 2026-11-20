//const siswa = [
//     {nama: "Dzaki", umur: 16},
//     {nama: "Zulfi", umur: 17},
//     {nama: "Fahry", umur: 15}
// ];

// console.log(siswa[0].nama, siswa[2].umur)

// const barang = [
//     {kode: "kb-001", nama: "keyboard mechanical", harga: 450000},
//     {kode: "ms-002", nama: "mouse gaming", harga: 250000},
//     {kode: "hs-003", nama: "headset", harga: 350000},
// ]

// const itemDibeli = barang[1]; 
// const jPembelian = 7; 
// const diskon = 0.1;


// if (jPembelian > 5) {
//     const pDiskon = itemDibeli.harga - (itemDibeli.harga * diskon) ;
//     const totalHargaAkhir = pDiskon * jPembelian;
//     console.log("total:", totalHargaAkhir)
// }else{
//     console.log(totalHargaAkhir)
// }


// const daftarSiswa = [
//     {
//         nama: "Andi",
//         kelas: "XI SIJA",
//         nilai: 85,
//         kehadiran: 90
//     },
//     {
//         nama: "Budi",
//         kelas: "XI SIJA",
//         nilai: 65,
//         kehadiran: 85
//     },
//     {
//         nama: "Citra",
//         kelas: "XI SIJA",
//         nilai: 92,
//         kehadiran: 95
//     },
//     {
//         nama: "Bima",
//         kelas: "XI SIJA",
//         nilai: 70,
//         kehadiran: 75
//     }
// ];

// for (let i = 0; i < daftarSiswa.length; i++) {
//     let siswa = daftarSiswa[i];

//     if (siswa.nilai >= 75 && siswa.kehadiran >= 80) {
//         console.log(`nama: ${siswa.nama} : lulus`);
//     } else {
//         console.log(`nama: ${siswa.nama} : tidak lulus`);
//     }
// }

const barangToko = [
    {
        nama: "Keyboard",
        stok: 10
    },
    {
        nama: "Mouse",
        stok: 3
    },
    {
        nama: "Headset",
        stok: 0
    },
    {
        nama: "Webcam",
        stok: 10
    },
    {
        nama: "USB HUB",
        stok: 10
    },
]

for (let i = 0; i < barangToko.length; i++) {
     let jumlahBarang = barangToko[i];
     if (jumlahBarang.stok > 5) {
        console.log(`nama: ${jumlahBarang.nama} : Stok tersedia`);
    } else if (jumlahBarang.stok == 0 ) {
        console.log(`nama: ${jumlahBarang.nama} : Stok habis`);
    } else {
         console.log(`nama: ${jumlahBarang.nama} : Stok sedikit`);
    }
}
    
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
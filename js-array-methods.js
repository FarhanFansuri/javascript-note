const barang = [
  { nama: "Laptop", harga: 15000000 },
  { nama: "Smartphone", harga: 5000000 },
  { nama: "Headset", harga: 300000 },
  { nama: "Keyboard", harga: 400000 },
  { nama: "Mouse", harga: 250000 },
  { nama: "Monitor", harga: 2000000 },
  { nama: "Printer", harga: 1500000 },
  { nama: "Tablet", harga: 7000000 },
  { nama: "Powerbank", harga: 500000 },
  { nama: "Speaker", harga: 800000 }
];

// filter, mengembalikan nilai 
const filteredArray = barang.filter(item=> item.harga > 4000000)

// map, mengembailkan nilai
const mapArray = barang.map(item => {
    return {
        nama: item.nama,
        harga: item.harga,
        mahal: item.harga > 4000000 ? "mahal" : "murah"
    }
})

// forEach, tidak mengembalikan nilai
jumlah_barang_mahal = 0
barang.forEach(item => {
    if(item.harga > 4000000){
        jumlah_barang_mahal++
    }
})

// some & every, mengembalikan boolean
adaBarangMahal = barang.some(item => item.harga > 10000000)
semuaBarangMahal = barang.every(item => item.harga > 10000000)

console.log(adaBarangMahal)
console.log(semuaBarangMahal)

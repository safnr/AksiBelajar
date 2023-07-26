/// Variabel
// Variabel let bersifat dinamik dan bisa berubah-ubah
// let name = "taylor"
// console.log(name);

// name = "fina"
// console.log(name);

// Variabel const tidak bisa diubah nilainya
// const city = "surabaya"
// console.log(city);

// city = "jakarta" 
// console.log(city); // outputnya error

//// Data Types
/// Undefined
// let x 
// console.log(typeof(x))
// x = 16
// console.log(typeof(x))
// String
// let z = "string"
// console.log(typeof(z))
// Boolean
// let q = false
// console.log(typeof(q))


//// Operator
// let x = 2
// let y = 3
// x += y //x=x+y
// console.log(x)
// console.log(x > y)

// let x = 2
// let y = "2"
// console.log(x === y) //Hasilnya false, sebab tipe datanya beda

// Operator logikal &&
// let x = 2
// let y = 2
// console.log(x>y && y==x) 
//Walau hasil aslinya benar dan salah
//maka hasilnya false, sebab ada salah satu yang salah

// Operator logikal ||
// let x = 2
// let y = 2
// console.log(x>y || y==x) 
//Walau hasil aslinya benar dan salah
//maka hasilnya false, sebab ada salah satu yang benar

// IF ELSE STATEMENT
// let x = 2
// let y = 4

// if (x > y) {
//     console.log("x")
// } else {
//     console.log("hasil y >  x itu false")
// }

// Mengecek apakah suatu varibel memiliki nilai
// let x = "zen"

// if (x) {
//     console.log(x)
// } else {
//     console.log(typeof(x))
// }

// Switch Case
// let bahasa = "jepang"
// let salam = null

// switch (bahasa) {
//     case "indonesia":
//         salam = "Selamat pagi"
//         break;
//     case "inggris":
//         salam = "Good morning"
//         break;
//     case "jepang":
//         salam = "Ohayou gozaimasu"
//         break;
//     default:
//         salam = "Assalamualaikum"
// } console.log(salam)

// Loop
// For Loop
// for (let i = 0; i<5; i++) {
//     console.log(i)
// }

// let myArray = ["array1","array2","array3"];
// for (const arrayItem of myArray) {
//     console.log(arrayItem)
// }

// While Loop
// Dicek dulu, baru dijalankan
// let x = 1
// while (x <= 10) {
//     console.log(x)
//     x++ //maksudnya x+1
// }

// Do While Loop
// Dijalankan dulu, baru dicek
// let x = 1
// do {
//     console.log(x)
//     x++
// } while (x < 5);

// Object
// Di variabel object, bisa menggunakan tipe data yang beda beda
// const user = {
//     fullName: "Zen",
//     domisili: "Bali",
//     umur: "23"
// }
// console.log(user.fullName)
// //Ganti Nama
// user.fullName = "Zen Gunawan"
// console.log(user.fullName)

/// Array
// Array di Node js bisa terdiri dari berbagai tipe data
// let myArray = [2002, "Gresik", true]
// console.log(myArray)
// console.log(myArray[2]) //menampilkan index ke 2 = true

// Spread Operator
// Untuk menggabungkan 2 array menjadi 1
// let mahasiswa = ["Fina", "Ditha", "Lia"]
// let npm = ["121","124","131"]

// let spreadArray = [...mahasiswa, ...npm]
// console.log(spreadArray)

// Spread Operator untuk menggabungkan 2 object menjadi 1 dalam array (Object dalam Array)
// let mahasiswa = [
//     {nama: "Fina"},
//     {nama: "Ditha"},
//     {nama: "Lia"}]
// let id = [
//     {npm: "121"},
//     {npm: "124"},
//     {npm: "131"}]

// let spreadArray = [...mahasiswa, ...id]
// console.log(spreadArray)

// Map
// Array dalam array
// const myArray = new Map([
//     ['Burger', 'Kentang', 'Es Krim'],
//     [25000, 8000, 10000],
//     [true, true, false],
// ]);
// console.log(myArray);


// Function
// function total(harga, jumlah, diskon) {
//     let total = (harga*jumlah)*diskon
//     return total //mengakhiri sebuah function
// } 
// console.log("Rp", total(15000, 3, 0.3));

// Alternatif, hasilnya dimasukkan ke variabel dulu
// function total(harga, jumlah, diskon) {
//     let total = (harga*jumlah)*diskon
//     return total //mengakhiri sebuah function
// } 
// let totalBelanja = total(15000, 3, 0.3)
// let totalJajan = total(10000, 10, 0.1)
// console.log("Total Belanja =","Rp",totalBelanja)
// console.log("Total Jajan =","Rp",totalJajan);

// Arrow Function
// Menyederhanakan function normal
// const luasPersegi = (p, l) => p*l
// console.log(luasPersegi(5, 5));

// Variabel Scope
// Dalam Node Js, variabel punya scope masing"
// Ada global dan local
// let x = 10 //Global
// function luasPersegiPanjang(z) {
//     let y = 5 //local, tidak bisa digunakan diluar function
//     luas = x * y * z
//     return luas
// }
// console.log(luasPersegiPanjang(2))
// console.log(luasPersegiPanjang(y)) //hasilnya akan error

// Export Import
// Import
// const kopi = require('./day1_export.js')
// console.log(kopi)

// Import Function
// const luasPersegi = require('./day1_export.js')
// console.log("Luas Persegi =",luasPersegi(5,3))

// Try Catch
try {
    console.log("Step pertama sebelum error")
    erorcode //belum terdefinisi sehingga akan menimbulkan error
    // baris dibawahnya tidak akan dijalankan dan akan lompat ke catch
    console.log("Setelah error")
} catch (error) {
    console.log(error.name)
}
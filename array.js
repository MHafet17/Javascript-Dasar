
let nama = ['hafid','naruto','boruto','luffy'];

// ubah isi array
nama[2] = 'Mitsuki';
console.log(nama);


// concact array
let buah = ['pisang', 'jeruk', 'mangga', 'lemon']
let sayuran = ['Tomat', 'Kentang', 'Kubis', 'Bawang', 'Wortel']
let concat =  buah.concat( sayuran )
console.log(concat)
// hasil: ['pisang', 'jeruk', 'mangga', 'lemon', 'Tomat', 'Kentang', 'Kubis', 'Bawang', 'Wortel']

// array spread
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [... arr1, ... arr2]
console.log(arr3)
// hasil: [1,2,3,4,5,6]

// IndexOf
console.log("========= IndexOf ========== ");
// IndexOf berfungsi mengecek apakah ada item dalam array, jika  ada maka kembalikan nilai dari 
// indeks tersebut,jika tidak ada maka akan mengembalikan nilai -1

let isiKulkas = ['semangka', 'pisang', 'mangga', 'apel']
let index = isiKulkas.indexOf('semangka')
console.log(index)
// hasil: 0
if(index == 0){
   console.log('Buah tersebut ada dalam kulkas, silahkan ambil') 
} else {
    console.log('Buah itu belum tersedia dalam kulkas')
}
// hasil: Buah tersebut ada dalam kulkas, silahkan ambil


// Join
console.log("======== Join Array =======");
let mugiwara = ['Luffy', 'Zorro', 'Sanji', 'Nami']
console.log(mugiwara.join())
// hasil: Luffy,Zorro,Sanji,Nami
console.log(mugiwara.join(' atau '))
// hasil: Luffy atau Zorro atau Sanji atau Nami
console.log(mugiwara.join('**'))
// hasil: Luffy**Zorro**Sanji**Nami
console.log(mugiwara.join(', '))
// hasil: Luffy, Zorro, Sanji, Nami
console.log(mugiwara.join('-'))
// hasil: Luffy-Zorro-Sanji-Nami

// Push & Pop
console.log(" ===== Push & Pop =======");
let bilangan = [0, 1, 2, 3]
bilangan.push(4,5,6)
bilangan.pop()
console.log(bilangan)
// hasil: [0, 1, 2, 3, 4]


// Unshift & Shift
console.log("====== Unshift & Shift =======");
let bilangan1 = [0, 1, 2]
bilangan1.unshift(3)
console.log(bilangan1)
// hasil: [3, 0, 1, 2]
let bilangan2 = [3, 0, 1, 2]
bilangan2.shift()
console.log(bilangan2) 
// hasil: [0, 1, 2]


// Sort
console.log("====  Sort ==== ");
let bilangan3 = [3, 5, 7, 1, 2]
bilangan3.sort()
console.log(bilangan3)
// hasil: [1, 2, 3, 5, 7]

let siswa = ['Sani', 'Anis', 'Kiki', 'Fahri']
siswa.sort()
console.log(siswa)
// hasil: ['Anis', 'Fahri', 'Kiki', 'Sani']

// pecahkan dibawah
let bl = [15,2,1]
bl.sort(function(value1, value2) { 
    return value1 > value2 
})
console.log(bl) 
// hasil: [1,2,15]


// Slice (Memotong Array, Jika parameter kedua tidak diisi maka akan mengambil data sampai akhir)
console.log("====== Slice =======");
let potong = [0, 1, 2, 3, 4]
let potongan = potong.slice(1,4)
console.log(potongan) 
// hasil: [1,2,3]

// Array MultiDimensi
console.log("======= Array MultiDimensi ========= ");
let mahasiswa = [ 
				['M Hafidz Masruri','17010197','Universitas Nurul Jadid'], 
				['Deddy Sujarwadi','17010199','Universitas Pasundan'] 
				];
console.log(mahasiswa);
console.log(mahasiswa[0][2]);
console.log(mahasiswa[1][2]);


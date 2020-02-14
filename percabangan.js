// Konsep If-Else
let angka = 0
if (angka > 0) {
  console.log(`${angka} adalah bilangan positif`)
} else if (angka < 0) {
  console.log(`${angka} adalah bilangan negati`)
} else if (angka == 0) {
  console.log(`${angka} adalah Nol`)
} else {
  console.log(`${angka} bukanlah angka yang valid`)
}
// hasil: 0 adalah Nol


// Konsep Switch
let cuaca = 'berawan'
switch (cuaca) {
  case 'hujan':
    console.log('Kamu butuh jas hujan')
    break
  case 'berawan':
    console.log('Sedikit dingin, gunakan jaket kesayanganmu')
    break
  case 'cerah':
    console.log('Senangnya bisa kemana saja')
    break
  default:
    console.log('BMKG belum update cuaca nih :(')
}
// hasil: Sedikit dingin, gunakan jaket kesayanganmu
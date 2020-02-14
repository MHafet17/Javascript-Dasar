for(let i = 5; i >= 0; i--){
  console.log(i)
}
// hasil:
// 5
// 4
// 3
// 2
// 1

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
// hasil:
// 0
// 1
// 2
// 3
// 4
// 5

let pelajaran = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB' ]
for (let belajar of pelajaran) {
  console.log(belajar.toUpperCase()) 
}
// hasil:
// HTML 
// CSS 
// JAVASCRIPT 
// REACT 
// NODE 
// MONGODB
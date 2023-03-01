// don't forget to push it to github

// let start = 10;
// let end = 100;
// let exclude = 40;

// for( i = 10; i<=end; i= i+start ){
//     if(i===exclude){
//         continue;
//     }
//     console.log(i)
// }
// // Output
// // 10
// // 20
// // 30
// // 50
// // 60
// // 70
// // 80
// // 90
// // 100

// let index = 10;
// let jump = 2;
// let end = 0;

// for (i=index; i<=index ; i=i-jump) {
//   console.log(i)
//   if(i===jump+jump){
//     break;
//   }
// }

// Output
// 10
// 8
// 6
// 4
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = 0; i < mix.length; i++) {
  if (isNaN(mix[i])) {
    continue;
  }
  if (mix[i] === 1) {
    continue;
  }
  console.log(mix[i]);
}

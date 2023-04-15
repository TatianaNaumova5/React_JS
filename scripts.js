console.log('-- JS --')

const titles = document.getElementsByTagName('h2')// psevdomassive
const subTitles = document.getElementsByClassName('sub-title')

console.log(subTitles)
for(let i = 0; i < titles.length; i++) {
  console.log(titles[i]);
}
// console.log([...titles]) // tozhe mozno perevesty v massive
//console.log(Array.from(titles))
const arr = Array.from(titles)
console.log(arr)

function plusOne(){
  console.log(++i);
}
function minusOne(){
  console.log(--i);
}

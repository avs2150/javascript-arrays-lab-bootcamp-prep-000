var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function appendKitten(name){
return [...kittens, name]
}
function prependKitten(name){
  return [name,...kittens]
}
function removeLastKitten() {
var newArray = kittens.slice(0, 2)
return newArray
}
function removeFirstKitten() {
  var newArray = kittens.slice(1, 3)
  return newArray
}

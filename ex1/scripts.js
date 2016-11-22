function* numbers() {
	yield;

}

console.log(numbers());
const gen = numbers();
gen.next();
gen.next();

function* shopping() {
  //stuff happens OUTSIDE store
  
  //go INTO the store with money
  const stuffFromStore = yield 'money';
  
  //return home
  return stuffFromStore;
}

//stuff happens inside store
const gen = shopping();
gen.next();//leaving home
gen.next('groceries');//leaving store with groceries
function generateRandomArray()
{
	let auxArray = [];
	let randomLength = Math.floor(Math.random()*100);
	for(let i = 0; i < randomLength; i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
let myStupidArray = generateRandomArray();

let ultimo=myStupidArray.length;
let theLastOne =myStupidArray[myStupidArray.length];
console.log(theLastOne);
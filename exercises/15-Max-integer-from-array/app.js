let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];
function findMax(array){
let max=myArray[0];
for (i=1; i<array.length;i++)
{
  max<array[i]? max=array[i]:max=max;
}
return max;
}
console.log(findMax(myArray));
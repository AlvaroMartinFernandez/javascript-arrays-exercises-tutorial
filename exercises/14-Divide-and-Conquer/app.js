let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

function mergeTwoList (list)
{
let odd=[];
let even=[];
for (i=0;i<list.length;i++)
{
    list[i]%2===0? even.push(list[i]):odd.push(list[i]);
}
 return odd.concat(even);
}

let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

function DataTypes(arr)
{
    let newArr=[];
    for(let i=0 ;i<arr.lenght ;i++)
    {
        newArray.push(typeof arr[i]);
    }
    console.log(newArr);
}
DataTypes(mix);
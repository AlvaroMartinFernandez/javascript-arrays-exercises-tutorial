let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

function deletePerson (persona)
{
    let newArray = people.filter((element) => element != persona) ;
    return newArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));

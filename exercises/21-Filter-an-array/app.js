let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

let resultingNames= allNames.filter(function(val){
    return (val[0]=== "R");
});
console.log(resultingNames);
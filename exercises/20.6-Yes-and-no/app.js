let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

let newArray = theBools.map(function(element){
   if( element==1)
    return "wiki";
    else{return "woko";}
});
console.log(newArray);
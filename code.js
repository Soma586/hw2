
var arr = ["a", "b", "c", "d"]


/*
function myEach(ar){
    for(i = 0; i < ar.length; i++){
        console.log(ar[i]);
    }

}*/

//myEach(arr);
//forEach()
let print = (ar) => {
    for(i = 0; i < ar.length; i++){
        console.log(ar[i]);
    }

}
//myEach(arr);
let myEach = (arr , callback) =>{
    return callback(arr);
}

myEach(arr, print);

//map()
let mapPrint = (ar) => {
    for(i = 0; i < ar.length; i++){
    
    }

    return ar;
}

let myMap = (callback) =>{
    return callback;
}

//filter

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let printFilter = (ar , target) =>{
    var newarr = [];
    var index = 0;
    for(i = 0; i < ar.length; i++){
        if(ar[i].length > target){
            newarr[index++] = ar[i];
        }
    }
    return newarr;

}

let myfilter = (ar ,target ,callback) =>{
    return callback(ar, target);
}
var test = myfilter(words,6, printFilter);
//console.log(test);


//some
let numarr = [1,3,5,8];

let foundEven = (ar) =>{
    let result = false;
    for(i =0; i < ar.length; i++){
         if(ar[i]%2 === 0){
             result = true;
         }
    }
    return result;
}

let mySome = (ar, callback) =>{
    return  callback(ar);
}

console.log(mySome(numarr , foundEven));






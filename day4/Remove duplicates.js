// Anonymous function

let duplicate=function(a){
let ans=[];
ans.push(...new Set(a));
console.log(ans)
}

let array=[1,1,1,4,8,9,7,5,4,4,9,8];
duplicate(array);

// IIFE Function

let array1=[1,1,1,4,8,9,7,5,4,4,9,8];
(function(a){
let ans=[];
ans.push(...new Set(a));
console.log(ans)
})(array1);

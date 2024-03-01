// Anonymous function
let palindromes=function(arr){
   let rev=[];
   let res=[];
 for(let i=0;i<arr.length;i++){
   rev.push(arr[i].split('').reverse().join(''));

 }
 for(let i=0;i<arr.length;i++){
   for(let j=0;j<rev.length;j++){
      if(arr[i]===rev[j]){
         res.push((arr[i]));
      }
   }
 }
 return res;
}

let a = ['hello','partha','121','madam'];
let op=(palindromes(a));
console.log(op);
 
// IIFE function

let a1=['1111','122','hiih'];
(function(arr){
  let rev=[];
  let res=[];
for(let i=0;i<arr.length;i++){
  rev.push(arr[i].split('').reverse().join(''));

}
for(let i=0;i<arr.length;i++){
  for(let j=0;j<rev.length;j++){
     if(arr[i]===rev[j]){
        res.push((arr[i]));
     }
  }
}
console.log(res);
})(a1);

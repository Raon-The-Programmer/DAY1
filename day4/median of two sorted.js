// Anonymous function

median=function(a,b){
    let c=a.concat(b);
  let sortc=c.sort((a,b)=>(a-b))
let len=sortc.length/2;
   console.log(c[len]+c[len-1])
}

let a=[2,3,4,5];
let b=[7,8,13,14];

median(a,b);

// IIFE function

arr1=[10,20,30];
arr2=[60,70,80];

(function(a,b){
    let c=a.concat(b);
  let sortc=c.sort((a,b)=>(a-b))
let len=sortc.length/2;
   console.log(c[len]+c[len-1])
})(arr1,arr2);

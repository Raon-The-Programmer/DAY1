// Anonymous function
let primeNumber=function(arr){
    for(let i=2;i<arr;i++){
        if(arr%i===0)
        return false
    }
    return arr>1
}
let array=[3,4,6,16,29,23];
let ans=array.filter(primeNumber);
console.log(ans);

// IIFE function
let a=[3,4,6,9,71,-9,-1,1,23,5];

(function(a){
  let out=[];
    for(let i=0;i<a.length;i++){
       let num=a[i];
       let ans=true;
       if(num<=1){
        ans=false;
       }
     for(let j=2;j<num;j++){
       if(num%j===0){
        ans=false
       }
     }

    if(ans){
      out.push(num)  
    }
    }
    console.log(out)
})(a);

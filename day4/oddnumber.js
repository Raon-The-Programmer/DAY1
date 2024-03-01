// Anonymous function odd number

let oddNumber=function(arr){
    let ans=[]
    for(arr of arr){
    if(arr%2!==0){
     ans.push(arr)
    }
}
return ans;
}

let arr=[1,2,3,4,5,6];
let ansArray=oddNumber(arr);
console.log(ansArray);

// IIFE Function

let num=[1,2,3,4,5,6,7];

(function(number){
  let a=[];
    for(numbers of number){
    if(numbers%2!==0){
  a.push(numbers);
    }
}
console.log(a)
})(num);

let oddNumber=(arr)=>{
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

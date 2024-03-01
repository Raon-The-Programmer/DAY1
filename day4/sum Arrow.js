let SumArray=(num)=>{
    let sum=0
    for(num of num){
        sum=sum+num;
    }
    return sum;
}

let array=[1,2,3,4,5,6,7,8,9,10];
let ans=SumArray(array);
console.log(ans)

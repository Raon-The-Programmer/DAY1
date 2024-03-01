
let primeNumber=(arr) => {
    
    for(let i=2;i<arr;i++){
        if(arr%i===0)
        return false
    }
    return arr>1
}

let array=[3,4,6,16,29,23];

let ans=array.filter(primeNumber);

console.log(ans);

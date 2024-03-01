
let palindromes = (arr) => {
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
 
 let string=['yoy','malayalam','sarathi','1221','partha'];
 let op=(palindromes(string));
 console.log(op);
  

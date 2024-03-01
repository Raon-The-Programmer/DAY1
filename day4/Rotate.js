// Anonymous function

let rorate=function(a,k){
    for(let i=0;i<k;i++){
        a.unshift( a.pop());  
        
    }
    console.log(a)
      }
    

let arr=[1,2,3,4,5];
let k=1
rorate(arr,k);

// IIFE Function

(function(){

    let arr=[1,2,3,4,5];
    let k=4;
    for(let i=0;i<k;i++){
      arr.unshift(arr.pop());  
    }
    console.log(arr);
    
})();

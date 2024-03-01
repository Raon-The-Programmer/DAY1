// Anonymous function

let titleCsaps=function(a){
    for(let i=0;i<a.length;i++){
        a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1)
    }
    console.log(a)
}

let array=['partha','hello','guvi'];
titleCsaps(array)

// IIFE Function
let a=['phone','whatsapp','facebook'];
(function(a){
    for(let i=0;i<a.length;i++){
        a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1)
    }
    console.log(a)
})(a);

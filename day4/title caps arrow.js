let titleCsaps=(a)=>{
    for(let i=0;i<a.length;i++){
        a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1)
    }
    console.log(a)
}

let array=['john','hello','guvi'];
titleCsaps(array)

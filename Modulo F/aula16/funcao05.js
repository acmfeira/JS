//recursividade
function fatorial(vl){
    if (vl == 1){
        return 1
    } else {
        return vl * fatorial(vl-1)
    }
}
//120! 
console.log(fatorial(5))
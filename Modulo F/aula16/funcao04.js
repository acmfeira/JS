function fatorial(vl){
    let fat = 1
    for (let v = vl; v > 1; v--){
        fat *=v
    }
    return fat
}

console.log(fatorial(5))
function parimpar(vl){
    if( vl%2 == 0){ // % pega o resto
        return 'Par'
    }
    return 'Impar'
}

console.log(parimpar(4))
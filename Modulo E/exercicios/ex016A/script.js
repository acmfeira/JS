function loadValores(){
    let ini = document.querySelector('input#inittxt')
    let fim = document.querySelector('input#fimtxt')

    let passo = document.querySelector('input#passtxt')

    let res = document.querySelector('div#result')
    

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar'
        alert('[ERRO] Erro de preenchimento de Campos')
    } else {
        res.innerHTML = 'Contando:<br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        p = p==0 ? 1: p

        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `<a>&#128073;</a> ${c}`
            }
        } else {
            for( let c= f; c <=i; c += p){
                res.innerHTML += `<a>&#128073;</a> ${c}`
            }
        }
    }
}
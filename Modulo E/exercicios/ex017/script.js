function gerarTabuada(){
    let tbl = document.querySelector("select#tbl")

    const valor = document.querySelector('input#nuntxt')

    if (valor.value == ''){
        alert('[ERRO] Insira o Valor!!!')
        return;
    }

    for(let v = 1; v <= 10 ; v ++){
        const res = Number(valor.value) * v 
        const txt = `${valor.value} x ${v} = ${res}`
        const opt = document.createElement('option')
        opt.innerHTML = txt
        tbl.add(opt)
    }
    
}

function limpa(){
    document.querySelector('select#tbl').innerHTML = ''

    let vl = document.querySelector('input#nuntxt')
    vl.value = ''

}
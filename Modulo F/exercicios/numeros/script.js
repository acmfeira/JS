let tabela = []

function addValor(){
    
    let valor = document.querySelector('input#valortxt')

    if (valor.value.length > 0 && valor.value > 0 && valor.value <= 100 ){
        
        //se valor existe mostra alert        
        if(verificaExist(valor.value)){
            alert('Valor ja existe!!!!')

        } else {

            //enable button Finalizar
            setButton(true)
            limpaMsg()    

            //verify if new value is add then clear message
            
            let lst = document.querySelector('select#lista')

            let item = document.createElement('option')
            item.text = `valor ${valor.value} adcionado`
            lst.appendChild(item)

            tabela.push(valor.value)
        }
    } else {
        alert('Entre com o valor valido!!!')
    }

    valor.value = ''
    valor.focus()
}
//if exist value return TRUE
function verificaExist(vl){
    const exist = tabela.indexOf(vl) == -1 ? false : true
    return exist
}
function limpaValorTxt(){
    let valor = document.querySelector('input#valortxt')
    valor.value = ''
}
function limpaMsg(){
    document.querySelector('div#msg').innerHTML = ''
}
function showResultado(){

    let msg = document.querySelector('div#msg')

    msg.innerHTML = ''

    msg.innerHTML = `Ao todo, temos ${tabela.length} numeros cadastrados.`
    
    let ts = tabela.sort(function(a,b){return a-b})
    msg.innerHTML += `
        <p>O maior valor informado foi ${ts[ts.length-1]}</p>
        <p>O menor valor informado foi ${ts[0]}
        <p>Somando todos os valores temos: ${somaValores()}</p>
        <p>A media dos valores digitado é: ${getMedia()}
        `
}
function getMedia(){
    return Math.round(somaValores() / tabela.length)
}
function somaValores(){
    let vtt = 0
    tabela.forEach(v =>{
        vtt += Number(v)
    })
    return vtt
}
function setButton(vl){    
    document.querySelector('button#btf').disabled = (vl == false ? true:false)
}
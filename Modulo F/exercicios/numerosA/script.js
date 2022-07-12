let num = document.querySelector('input#numtxt')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')

let valores = []
function isNumbero(num){
    if(Number(num) >= 1 && Number(num)  <= 100){
        return true
    } else {
        return false;
    }
}
function inLista(num, l){
    if(l.indexOf(Number(num)) != -1){
        return true;
    } else {
        return false
    }
}
function adcionar(){
    if(isNumbero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('error')
    }
    num.value = ''
    num.focus()

}
function finalizar(){

    if(valores.length == 0){
        alert('Adicone valores na lista')
    } else {
        let tot = valores.length

        let maior = valores[0]
        let menor = valores[0]

        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos];
            }
            if(valores[pos] < menor){
                menor = valores[pos];
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O <b>maior</b> valor informado foi: ${maior}</p>`
        res.innerHTML += `<p>O <b>menor</b> valor informado foi: ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}</p>`
        media = soma / tot
                
        res.innerHTML += `<p>A media dos valores digitados é: ${media}</p>`
    }
}
function gerarTabuada(){
    let num = document.querySelector('input#txtvl')
    let tab = document.querySelector('select#tabuada')

    if(num.value.length == 0 ){
        alert("[ERROR] Digite um numero!!!!")
    } else {
        tab.innerHTML = '' //clear tab items

        let n = Number(num.value)

        let c = 0
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${(n*c)}`
            item.value = `tabuada${c}`// it is more used by php
            tab.appendChild(item)
            c++

        }
    }
}
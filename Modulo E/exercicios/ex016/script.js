function iniciar(){
    const numi = document.querySelector('input#numStart')
    let numf = document.querySelector('input#numEnd')

    const pass = document.querySelector('input#pass')

    let step = pass.value == 0 ? 1 : Number(pass.value)

    const emo = '<a>&#128073;</a>'
    const band = '<a>&#128175;</a>'
    if(numi.value.length == 0 && numf.value.length == 0 || numf.value > 20){
        alert('[ERROR] valor invalido!! ou valor maximo excedido!!!')
        numf.value = 20
    } else {
        let msg = document.querySelector('p#msg')
        let txt = ''

        let inic =  Number(numi.value)

        /*
        do {
            txt += (inic+step) <= numf.value ? `${inic}${emo} ` : `${inic}${band} `
            inic += Number(step)
        } while (inic <= numf.value)
        */

        while(inic <= numf.value){
            txt += (inic+step) <= numf.value ? `${inic}${emo} ` : `${inic}${band} `
            inic += Number(step)
        }
        
        msg.innerHTML = txt;
        
    }
}
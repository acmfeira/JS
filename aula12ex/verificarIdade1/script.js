function verificar(){
    const now = new Date()
    const ano = now.getFullYear() //2019

    const fano = document.querySelector('input#txtAno')

    let res = document.querySelector('div#res')

    if(fano.value == 0 || fano.value > ano){
        alert('[Error] Dados Invalidos')
    } else {
        const rsex = document.getElementsByName('radSex')
        const idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')

        if(rsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 &&  idade < 10){
                //criança
                img.setAttribute('src','fotos/crianca-h.png')
            } else if(idade < 18) {
                img.setAttribute('src','fotos/jovem-h.png')
            }else if(idade < 53){
                img.setAttribute('src','fotos/adulto-h.png')
            } else {
                img.setAttribute('src','fotos/idoso-h.png')
            }
        }
        else {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src','fotos/crianca-m.png')
            } else if(idade < 18){
                //jovem
                img.setAttribute('src','fotos/jovem-m.png')
            } else if( idade < 53){
                //adulto
                img.setAttribute('src','fotos/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src','fotos/idoso-m.png')
            }
        }
 
        res.innerHTML = `Detectado ${genero} com ${idade} de idade.`
        res.appendChild(img)
    }
}
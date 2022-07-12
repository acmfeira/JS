function load(){
    var msg = window.document.querySelector('div#horario')
    var img = window.document.querySelector('img#imagem')
    
    const data = new Date()
    const horaShow = `${data.getUTCHours()}:${data.getMinutes()}:${data.getSeconds()}`

    let now = data.getHours();

    now = 0
    let txt = `Agora são: ${horaShow} Horas, hday`
    
    if(now >= 0 && now <12){

        img.src = "fotos/manha.png"
        msg.innerHTML = txt.replace("hday","Bom Dia!!!")
        document.body.style.background = '#766f67'

    } else if(now >=12 && now <18){

        img.src = "fotos/tarde.png"
        msg.innerHTML = txt.replace("hday","Boa Tarde!!!")
        document.body.style.background = '#e1aa43'

    } else if(now >=18 && now <20){

        img.src = "fotos/tarde6Horas.png"
        msg.innerHTML = txt.replace("hday","Bom inicio de Noite!!")

        document.body.style.background = '#b05819'

    } else {

        img.src = "fotos/noite.png"
        msg.innerHTML = txt.replace("hday","Boa Noite!!!")
        document.body.style.background = '#213e4c'

    }
}

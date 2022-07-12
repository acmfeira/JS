
function verifica(){
    let dados = document.querySelector('input#dados')
    let idade = dados.value

    let img = document.querySelector('img#image')
    let msg = document.querySelector('div#msg')
    const txt = `AA com ${idade} anos de idade.`
    
    if(idade >=1 && idade <2){
        msg.innerHTML = txt.replace("AA","Bebe");
        img.src = "fotos/bebe.png"
    } else if(idade >=2 && idade <6){
        msg.innerHTML = txt.replace("AA","Criança")
        img.src = "fotos/crianca.png"
    } else if(idade >=6 && idade <16){
        msg.innerHTML = txt.replace('AA','Menina')
        img.src = "fotos/menina12.png"
    } else if(idade >=16 && idade <35){
        img.src = "fotos/jovem.png"
        msg.innerHTML = txt.replace('AA','Jovem')
    } else if(idade >=35 && idade <50){
        img.src = "fotos/adulto.png"
        msg.innerHTML = txt.replace('AA','Adulto')
    } else {
        img.src = "fotos/idoso.png"
        msg.innerHTML = txt.replace('AA','Idoso')
    }
}

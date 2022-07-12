let valores = [1,5,3,0,9,4]

//valores.sort()

for(let c= 0; c< valores.length; c++){
    console.log(`A posição ${c} tem o valor: ${valores[c]}`)
}

valores.forEach(v => {
    console.log(`Valor : ${v}`)
})

for(let v in valores){
    console.log(`A posição ${v} tem o valor: ${valores[v]}`)
}
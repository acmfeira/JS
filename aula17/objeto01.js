let amigo = {joao:'jose',sexo:'homem',peso:23.75,engordar(p=0){
    this.peso += p
    return this.peso
}}

amigo.engordar(30)

console.log(`Ele pesa agora ${amigo.peso} `)


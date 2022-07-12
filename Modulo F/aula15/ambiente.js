let carros = ['fusca','fiat','dodge','maveric','passat']

let cpos = carros.indexOf('dodge')

console.log(`A posição ${cpos} tem o carro: ${carros[cpos]}`)

carros.push('decave') //add new item to end of array

console.log(carros)

//remove at position 2 two items and return new array with deleted items
console.log(carros.splice(2,2)) 


const carro = carros.indexOf('fiat')

if(carro == -1){
    console.log('Carro nao existe!!!')    
} else {
    console.log(`Carro selecionado é: ${carros[carro]}`)
}
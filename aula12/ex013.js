var now = new Date()

var diasem = now.getDay()

let diatxt = ""
/*
0 = Sunday
1 = Monday
2 = Tuesday
3 = Wednesday
4 = Thursday
5 = Friday
6 = Saturday
*/

let res0 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
console.log(`Today 0 is : ${res0[diasem]}`)

let res1 = {0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'}

console.log(`Today 1 is: ${res1[diasem]}`)

switch(diasem){
    case 0 : diatxt = 'Sunday';break;
    case 1 : diatxt = 'Monday';break;
    case 2 : diatxt = 'Tuesday';break;
    case 3 : diatxt = 'Wednesday';break;
    case 4 : diatxt = 'Thursday';break;
    case 5 : diatxt = 'Friday';break;
    case 6 : diatxt = 'Saturday';break;
}
console.log(`Today is: ${diatxt}`)
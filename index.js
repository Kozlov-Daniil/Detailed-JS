// const person = {
//     name: 'Eagle',
//     age: 20,
//     greet: function() {
//         console.log('Greet!')
//     }
// }

// const person = new Object({
//     name: 'Eagle',
//     age: 20,
//     greet: function() {
//         console.log('Greet!')
//     }
// })

// Object.prototype.sayHello = function() {
//     console.log('Hello')
// }

// const Danya = Object.create(person)

// Danya.name = 'Daniil'

// const str = 'I am string'

// const str = new String ('I am string')

function hello(){
    console.log('Hello', this)
}

const person = {
         name: 'Eagle',
         age: 20,
         sayHello: hello,
         sayHelloWindow: hello.bind(window), // = hello.bind(this)
         logInfo: function(job, phone){
            console.group(`${this.name} info:`)
            console.log(`Name is ${this.name}`)
            console.log(`Age is ${this.age}`)
            console.log(`Job is ${job}`)
            console.log(`Phone is ${phone}`)
            console.groupEnd()
         }
     }

const Danya = {
    name: 'Daniil',
    age: 21
}

person.logInfo()
// person.logInfo.bind(Danya)('Programmist', '123')
const fnDanyaInfoLog = person.logInfo.bind(Danya) //, 'Web-designer', '+79027******'\
fnDanyaInfoLog('Web-designer', '+79027******')

person.logInfo.call(Danya, 'Web-designer', '+79027******')
person.logInfo.apply(Danya, ['Web-designer', '+79027******']) //Можно передавать только 2 параметра

//==========

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
// return arr.map(function(i){
//     return i * n
// })
// }

// console.log(multBy(array, 15))


Array.prototype.multBy = function(n){
    return this.map(function(i){
             return i * n
         })
}

console.log(array.multBy(3))


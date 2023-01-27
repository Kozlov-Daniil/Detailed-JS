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

// function hello(){
//     console.log('Hello', this)
// }

// const person = {
//          name: 'Eagle',
//          age: 20,
//          sayHello: hello,
//          sayHelloWindow: hello.bind(window), // = hello.bind(this)
//          logInfo: function(job, phone){
//             console.group(`${this.name} info:`)
//             console.log(`Name is ${this.name}`)
//             console.log(`Age is ${this.age}`)
//             console.log(`Job is ${job}`)
//             console.log(`Phone is ${phone}`)
//             console.groupEnd()
//          }
//      }

// const Danya = {
//     name: 'Daniil',
//     age: 21
// }

// person.logInfo()
// // person.logInfo.bind(Danya)('Programmist', '123')
// const fnDanyaInfoLog = person.logInfo.bind(Danya) //, 'Web-designer', '+79027******'\
// fnDanyaInfoLog('Web-designer', '+79027******')

// person.logInfo.call(Danya, 'Web-designer', '+79027******')
// person.logInfo.apply(Danya, ['Web-designer', '+79027******']) //Можно передавать только 2 параметра

// //==========

// const array = [1, 2, 3, 4, 5]

// // function multBy(arr, n) {
// // return arr.map(function(i){
// //     return i * n
// // })
// // }

// // console.log(multBy(array, 15))


// Array.prototype.multBy = function(n){
//     return this.map(function(i){
//              return i * n
//          })
// }

// console.log(array.multBy(3))

// function createCalFunction(n) {
//     return function() {
//         console.log(1000 * n)
//     }
// }

// const  calc = createCalFunction(42)
// // console.log(calc)
// calc()

// function createIncrementor(m) {
//     return function(num) {
//         return m + num
//     } 
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)

// console.log(addOne(10))
// console.log(addOne(45))

// console.log(addTen(10))
// console.log(addTen(45))

// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'))
// console.log(ruUrl('twitch'))



// function bind(context, fn) {
//     return function(...args) {
//         fn.apply(context, args)
//     }
// }

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = {name: 'Даниил', age: 20, job: 'Безработный'}
// const person2 = {name: 'Игорь', age: 24, job: 'Продавец'}

// bind(person1, logPerson)()
// bind(person2, logPerson)()

console.log('Start')
console.log('Start 2')

function timeout2sec() {
    console.log('timeout2sec')
}

setTimeout(function() {
    console.log('Inside timeout, after 0 seconds')
}, 0)

window.setTimeout(function() {
    console.log('Inside timeout, after 5 seconds')
}, 5000)

setTimeout(timeout2sec, 2000)

console.log('End')
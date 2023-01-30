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

// console.log('Start')
// console.log('Start 2')

// function timeout2sec() {
//     console.log('timeout2sec')
// }

// setTimeout(function() {
//     console.log('Inside timeout, after 0 seconds')
// }, 0)

// window.setTimeout(function() {
//     console.log('Inside timeout, after 5 seconds')
// }, 5000)

// setTimeout(timeout2sec, 2000)

// console.log('End')

// console.log('Request data...')

// setTimeout(() => {
//   console.log('Preparing data...')

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }

//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data recieved', backendData)
//   }, 2000)
// }, 2000)

// const p = new Promise(function(resolve, reject) {  // 2 аргумента в функции 
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//           }
//         resolve(backendData)
//     }, 2000)
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)  // Если reject - выведет ошибку
//             // console.log('Data recieved', backendData)
//           }, 2000)
//     })

//     // p2.then(clientData => {
//     //     console.log('Data recieved', clientData)
//     // })
// })
// .then(clientData => {
//     console.log('Data recieved', clientData)
//     clientData.fromPromise = true
//     return clientData 
// }).then(data => {
//     console.log('Modified', data)
// })
// .catch(err => console.error('Error: ', err)) // Выведение ошибки в случае с reject
// .finally(() => console.log('Finally'))

// /////

// const sleep = ms => {
//    return new Promise(resolve => {
//     setTimeout(() => resolve(), ms)
//    })
// }

// // sleep(2000).then(() => console.log('After 2 sec'))
// // sleep(3000).then(() => console.log('After 3 sec'))

// Promise.all([sleep(2000), sleep(5000)])
// .then(() => {
//     console.log('All promises')
// })

// Promise.race([sleep(2000), sleep(5000)])
// .then(() => {
//     console.log('Race promises')
// })

// const person = Object.create(
//     {
//         calculateAge() {
//             console.log('Age:', new Date().getFullYear() - this.birthYear)
//         }
// }, {
//     name: {
//         value: 'Eagle',
//         enumerable: true, // Делает видным для цикла
//         writable: true, // Позволяет изменять значение
//         configurable: true // Позволяет удалять ключ из объекта
//     },
//     birthYear: {
//         value: 2002,
//         enumerable: true
//     },
//     age: {
//         get() {
//             return new Date().getFullYear() - this.birthYear
//         },
//         set(value) {
//             document.body.style.background = 'blue'
//             console.log('Set age', value)
//         }
//     }
// }) 

// person.name = 'Daniil'
// person.birthYear = 2000

// for(let key in person) {
//     if (person.hasOwnProperty(key)){
//         console.log('Key', key, person[key])
//     }
// }


// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

// class Animal{

//     static type = 'ANIMAL'

//     constructor(options){
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }

//     voice() {
//         console.log('I am animal')
//     }
// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// class Cat extends Animal {
//     static type = 'CAT'

//     constructor(options){
//         super(options)  //Вызов родительского конструктора
//         this.color = options.color
//     }

//     voice() {
//         super.voice()
//         console.log('I am cat')
//     }

//     get ageInfo() {
//         return this.age * 7
//     }

//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })


// /////

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }

//     hide() {
//         this.$el.style.display = 'none'
//     }

//     show() {
//         this.$el.style.display = 'block'
//     }
// }

// class Box extends Component{
//     constructor(options) {
//         super(options.selector)
//         this.$el.style.width = this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.color
//     }
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })

// const box2 = new Box({
//     selector: '#box2',
//     size: 150,
//     color: 'black'
// })

// class Circle extends Box{
//     constructor(options) {
//         super(options)
//         this.$el.style.borderRadius = '50%'
//     }
// }

// const c = new Circle ({
//     selector: '#circle',
//     size: 90,
//     color: 'blue'
// })

// const delay = ms => {
//     return new Promise (r => setTimeout(() => r(), ms))
// }

// delay(2000).then(() => console.log('2 sec'))

// const url = 'https://jsonplaceholder.typicode.com/todos'

// // function fetchTodos() {
// //     console.log('Fetch todo started...')
// //     return delay(3000).then(() => {
// //       return fetch(url)
// //     }).then(response => response.json())
// // }

// // fetchTodos().then(data => {
// //     console.log('Data:', data)
// // })
// // .catch(e => console.error(e))

// async function fetchAsuncTodos() {
//     console.log('Fetch todo started...')
//     try {
//         await delay(3000)
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log('Data:', data)
//     } catch(e) {
//         console.error(e)
//     } finally{
        
//     }
// }

// fetchAsuncTodos()



//Objects
const person = {
    name: 'Eagle',
    age: 20,
    job: 'Frontend'
}

const op = new Proxy(person, {
    get(target, prop) {
        console.log('Target', target)
        console.log('Prop', prop)
        console.log(`Getting prop ${prop}`)
        if(!(prop in target)) {
            return prop.split('_').map(p => target[p]).join(' ')
        }
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target){
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in target`)
        }      
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting', prop)
        delete target[prop]
        return true
    }
})

//Functions 
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) {  //Принимает 3 параметра
        console.log('Calling fn...')
        return target.apply(thisArg, args).toUpperCase()
    }
})

//Classes

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('Construct...')
        return new Proxy (new target(...args), {
            get(t, prop) {
                console.log(`Getting prop "${prop}"`)
                return t[prop]
            }
        })
    }
})

const p = new PersonProxy('Eagle', 20)
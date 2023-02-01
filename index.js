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
// const person = {
//     name: 'Eagle',
//     age: 20,
//     job: 'Frontend'
// }

// const op = new Proxy(person, {
//     get(target, prop) {
//         console.log('Target', target)
//         console.log('Prop', prop)
//         console.log(`Getting prop ${prop}`)
//         if(!(prop in target)) {
//             return prop.split('_').map(p => target[p]).join(' ')
//         }
//         return target[prop]
//     },
//     set(target, prop, value) {
//         if (prop in target){
//             target[prop] = value
//         } else {
//             throw new Error(`No ${prop} field in target`)
//         }      
//     },
//     has(target, prop) {
//         return ['age', 'name', 'job'].includes(prop)
//     },
//     deleteProperty(target, prop) {
//         console.log('Deleting', prop)
//         delete target[prop]
//         return true
//     }
// })

// //Functions 
// const log = text => `Log: ${text}`

// const fp = new Proxy(log, {
//     apply(target, thisArg, args) {  //Принимает 3 параметра
//         console.log('Calling fn...')
//         return target.apply(thisArg, args).toUpperCase()
//     }
// })

// //Classes

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }

// const PersonProxy = new Proxy(Person, {
//     construct(target, args) {
//         console.log('Construct...')
//         return new Proxy (new target(...args), {
//             get(t, prop) {
//                 console.log(`Getting prop "${prop}"`)
//                 return t[prop]
//             }
//         })
//     }
// })

// const p = new PersonProxy('Eagle', 20)



// Wrapper

// const withDefaultValue = (target, defaultValue = 0) => {
//     return new Proxy(target, {
//         get: (obj, prop) => (prop in obj ? obj[prop]: defaultValue)
//     })
// }

// const position = withDefaultValue({
//     x: 24,
//     y: 42
// },0
// )

// console.log(position)

// //Hidden properties

// const withHiddenProps = (target, prefix = '_') => {
//     return new Proxy(target, {
//         has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
//         ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
//         get: (obj, prop, receiver) => (prop in receiver) ? obj[prop]: void 0
//     })
// }

// const data = withHiddenProps({
//     name: 'Eagle',
//     age: 20,
//     _uid: '123'
// })


// //Optimization


// // const index = {}
// // userData.forEach(i => (index[i.id] = i))

// const IndexedArray = new Proxy(Array, {
//     construct(target, [args]) {
//         const index = {}
//         args.forEach(item => (index[item.id] = item))

//         return new Proxy (new target(...args), {
//             get(arr, prop) {
//                 switch (prop) {
//                     case 'push': return item => {
//                         index[item.id] = item
//                         arr[prop].call(arr, item)
//                     }
//                     case 'findById': return id => index[id]
//                     default: return arr[prop]
//                 }
//             }
//         })
//     }
// })

// const users = new IndexedArray([
//     {id: 1, name: 'Eagle', job: 'Frontend', age: 20},
//     {id: 2, name: 'Mihail', job: 'Fullstack', age: 21},
//     {id: 3, name: 'Daniil', job: 'Backend', age: 22},
//     {id: 4, name: 'Lisa', job: 'Teacher', age: 23}
// ])


// function* strGenerator() {
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }

// const str = strGenerator()

// function* numberGen(n = 10) {
//     for(let i = 0; i < n; i++) {
//         yield i
//     }
// }

// const num = numberGen(7)

// const iterator = {
//     [Symbol.iterator](w = 10) {
//         let q = 0
//         return {
//             next() {
//                 if (q < w) {
//                     return {value: ++q, done: false}
//                 }
//                 return {value: undefined, done: true}
//             }
//         }
//     }
// }

// function* iter(x = 10) {
//     for (let c = 0; c < x; c++) {
//         yield c
//     }
// }


// for(let z of iter(5)) {
//     console.log(z)
// }


// const people = [
//     {name: 'Eagle', age: 20, budget: 20000},
//     {name: 'Mihail', age: 14, budget: 40000},
//     {name: 'Danya', age: 22, budget: 50000},
//     {name: 'Lisa', age: 16, budget: 30000},
//     {name: 'Sofia', age: 24, budget: 60000}
// ]

// // for (let i = 0; i < people.length; i++) {
// //     console.log(people[i])
// // }

// // for (let person of people) {
// //     console.log(person)
// // }

// // ForEach
// // people.forEach(function (person, index, pArr) {
// //     console.log(person)
// // })

// people.forEach(person => console.log(person))

// //Map
// const newPeople = people.map(person => {
//     return `${person.name} (${person.age})`
// })
// console.log(newPeople)

// //Filter
// const adults = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults)

// const adults1 = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// })
// console.log(adults1)

// const adults2 = people.filter(person => person.age >= 18)
// console.log(adults2)

// //Reduce
// let amount = 0
// for (let i=0; i<people.length; i++){
//     amount += people[i].budget
// }
// console.log(amount)

// const amount1 = people.reduce((total, person) => {
//     return total + person.budget
// }, 0)
// console.log(amount1)

// const amount2 = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount2)

// //Find
// const eagle = people.find(person => person.name === 'Eagle')
// console.log(eagle)

// //FindIndex
// const eagleIndex = people.findIndex(person => person.name === 'Eagle')
// console.log(eagleIndex)

// ///////
// const newPeoples = people
// .filter(person => person.budget > 30000)
// .map(person => {
//     return {
//         info: `${person.name} (${person.age})`,
//         budget: person.budget
//     }
// })

// console.log(newPeoples)

/////////////Map

const obj = {
    name: 'Eagle',
    age: 20,
    job: 'Frontend'
}

const entries = [
    ['name', 'Eagle'],
    ['age', 20],
    ['job', 'Frontend']
]

console.log(Object.entries(obj))
console.log(Object.fromEntries(entries))

const map = new Map(entries)
console.log(map.get('job'))
console.log(obj.job)
map
.set('newField', 42)
.set(obj, 'Value of object')
.set(NaN, 'NaN ??')
console.log(map)
console.log(map.get(obj))
console.log(map.get(NaN))
map.delete('job')
console.log(map.has('job'))
console.log(map.size)
// map.clear()
// console.log(map.size)

///////////////
for (let entry of map.entries()) {
    console.log(entry)
}

for (let [key, value] of map.entries()) {
    console.log(key, value)
}

for (let [key, value] of map) {
    console.log(key, value)
}


for (let val of map.values()) {
    console.log(val)
}

for (let key of map.keys()) {
    console.log(key)
}

map.forEach((val, key, m) => {
    console.log(val, key)
})

///////////////////
const array = [...map]
console.log(array)

const array1 = Array.from(map)
console.log(array1)

const mapObj = Object.fromEntries(map.entries())
console.log(mapObj)

/////////////
const users = [
    {name: 'Daniil'},
    {name: 'Misha'},
    {name: 'Alex'}
]

const visits = new Map()
visits
.set(users[0], new Date())
.set(users[1], new Date(new Date().getTime() +1000 * 60))
.set(users[2], new Date(new Date().getTime() +5000 * 60))

function lastVisit(user){
    return visits.get(user)
}
console.log(lastVisit(users[1]))

////////Set
const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])
console.log(set)
set.add(10).add(20).add(30).add(20)
console.log(set)
console.log(set.has(30))
console.log(set.size)
console.log(set.delete(1))
console.log(set.size)
// console.log(set.clear())
// console.log(set.size)

console.log(set.values())
console.log(set.keys())
console.log(set.entries())

for (let k of set) {
    console.log(k)
}


function uniqValues(array) {
    return [...new Set(array)]
}
console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 5, 6, 6, 6]))

function uniqValues1(array) {
    return Array.from(new Set(array))
}
console.log(uniqValues1([1, 1, 2, 2, 4, 4, 4, 4, 5, 6, 6, 6]))


////////////WeakMap
let ob = {name: 'weakmap'}
// const a  = [ob]
// ob = null
// console.log(ob)
// console.log(a[0])

const q = new WeakMap([
    [ob, 'ob data']
])
// get set delete has
ob = null
console.log(q.has(ob))
console.log(q.get(ob))
console.log(q)

/////////
const cache = new WeakMap()
function cacheUser(us) {
    if (!cache.has(us)) {
        cache.set(us, Date.now())
    }
    return cache.get(us)
}
let lena = {name: 'Elena'}
let lesha = {name: 'Lesha'}
cacheUser(lena)
cacheUser(lesha)

lena = null

console.log(cache.has(lena))
console.log(cache.has(lesha))


////////////WeakSet
const users1 = [
    {name: 'Daniil'},
    {name: 'Misha'},
    {name: 'Alex'}
]

const visit = new WeakSet()
visit.add(users1[0]).add(users1[1])

users1.splice(1, 1) //Удаление второго пользователя из users1

console.log(visit.has(users1[0]))
console.log(visit.has(users1[1]))
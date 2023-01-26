// const person = {
//     name: 'Eagle',
//     age: 20,
//     greet: function() {
//         console.log('Greet!')
//     }
// }

const person = new Object({
    name: 'Eagle',
    age: 20,
    greet: function() {
        console.log('Greet!')
    }
})

Object.prototype.sayHello = function() {
    console.log('Hello')
}

const Danya = Object.create(person)

Danya.name = 'Daniil'

// const str = 'I am string'

const str = new String ('I am string')
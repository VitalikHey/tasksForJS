// // Убрал экспорты иначе браузер ощибку выдаёт
//
// // Задание 1
//
// interface User {
//     name: string,
//     age: number,
//     occupation: string
// }
//
// const users: User[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     }
// ];
//
// function logPerson(user: User) {
//     console.log(` - ${user.name}, ${user.age}`);
// }
//
// console.log('Users:');
// users.forEach(logPerson);
//
// // Задание 2
//
// interface User {
//     name: string;
//     age: number;
//     occupation: string;
// }
//
// interface Admin {
//     name: string;
//     age: number;
//     role: string;
// }
//
// type Person = User | Admin
//
// const persons: Person[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];
//
// function logPerson(user: Person) {
//     console.log(` - ${user.name}, ${user.age}`);
// }
//
// persons.forEach(logPerson);

// Задание 3

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function isAdmin(person: Person): person is Admin {
    return ("role" in person);
}

function logPerson(person: Person) {
    let additionalInformation: string;
    if (isAdmin(person)) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(`- ${person.name}, ${person.age}, ${additionalInformation}`);
}


persons.forEach(logPerson);

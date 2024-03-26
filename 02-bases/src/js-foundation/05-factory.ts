import { getId } from "../plugins"

interface BuildmakePersonOptions {
    getId: () => string;
    getAge: (birthdate: string) => number;
}
interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getId, getAge }: BuildmakePersonOptions) => {
    return ({ name, birthdate }: PersonOptions) => {
        return {
            id: getId(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}



// const obj = { name: 'Jhon', birthdate: '1994-03-18' }
// const Jhon = buildPerson(obj)
// console.log(Jhon)

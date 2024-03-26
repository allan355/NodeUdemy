const buildMakePerson = ({ getId, getAge }) => {
    return ({ name, birthdate }) => {
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

module.exports = {
    buildMakePerson,
}
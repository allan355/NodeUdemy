const getPokemonById = require('./js-foundation/06-promises')

getPokemonById(666)
    .then((pokemon) => console.log(pokemon))
    .catch((err) => console.log(err))
    .finally(() => console.log('finaly'))

// ! referencia a funcion factory
/*const { getId, getAge } = require('./plugins')
const { buildMakePerson } = require('./js-foundation/05-factory')
const makePerson = buildMakePerson({ getId, getAge });

const obj = { name: 'Jhon', birthdate: '1994-03-18' }
const jhon = makePerson(obj);
console.log({ jhon })*/



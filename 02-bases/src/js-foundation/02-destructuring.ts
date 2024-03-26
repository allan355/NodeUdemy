//console.log(process.env)

const { SHELL, OS, npm_lifecycle_script } = process.env

//console.table({ SHELL, OS ,npm_lifecycle_script})

const characters = ['flash', 'superman', 'green lantern', 'batman']

const [, , , batman] = characters

console.log(batman)
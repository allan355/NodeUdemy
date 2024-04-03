//console.log(process.env)

const { SHELL, OS, npm_lifecycle_script } = process.env

//console.table({ SHELL, OS ,npm_lifecycle_script})

export const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman']

const [, , , batman] = characters

console.log(batman)
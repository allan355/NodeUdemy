import yargs, { number } from "yargs";

import { hideBin } from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: "Multiplication table base"
    }).option('l', {
        alias: 'Limit',
        type: 'number',
        default: 10,
        describe: "Multiplication table base"
    }).option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: "Show Multiplication table"
    }).option('d', {
        alias: 'FileDestination',
        type: 'string',
        default: "outputs",
        describe: "Destination folder"
    }).option('f', {
        alias: 'FileName',
        type: 'string',
        default: "table.txt",
        describe: "File Name"
    })
    .check((argv, options) => {
        if (argv.b <= 0) {
            throw 'Error: base must be greater than 0'
        }
        return true
    })
    .parseSync()
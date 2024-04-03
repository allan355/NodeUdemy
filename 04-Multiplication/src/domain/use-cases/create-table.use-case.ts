export interface CreatetableUseCase {

    execute: (options: CreatetableOptions) => string
}

export interface CreatetableOptions {
    base: number,
    limit: number,
}

export class Createtable implements CreatetableUseCase {
    constructor(
        /**
         * DI - Dependency Injection
         */
    ) { }

    execute({ base, limit }: CreatetableOptions) {
        let outputMessage = ""
        for (let index = 1; index <= limit; index++) {
            var result = base * index
            outputMessage = outputMessage.concat("\n" + `${base} x ${index} = ${result}`)
        }
        return outputMessage
    }
}
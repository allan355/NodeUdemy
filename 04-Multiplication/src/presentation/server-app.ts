import { log } from "console";
import { Createtable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean,
    destination: string,
    fileName: string
}

export class ServerApp {
    static run({ base, limit, showTable, destination, fileName }: RunOptions) {
        console.log('Server running...');

        const table = new Createtable().execute({ base, limit });
        const saved = new SaveFile().execute({ destination: destination, fileContent: table, fileName: fileName })
        if (showTable) log(table)
        saved ? console.log("file created!!!") : console.error("file not created!!!")

    }
}
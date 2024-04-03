import fs from "fs";

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string,
    destination: string,
    fileName: string
}

export class SaveFile implements SaveFileUseCase {
    constructor(
        /**
         * repository: StorageRepository
         */
    ) { }

    execute(options: Options): boolean {
        try {
            if (!fs.existsSync(options.destination)) {
                fs.mkdirSync(options.destination, { recursive: true });
            }

            fs.writeFileSync(`${options.destination}/${options.fileName}`, options.fileContent)
            console.log("The file was saved!!");

            return true;
        }
        catch (error) {
            console.error(error)
            return false
        }
    }

}
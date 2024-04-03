
import { existsSync, mkdirSync, writeFile } from 'node:fs';
import { yarg } from './config/plugins/args.plugin';

const { b: base, l: Limit, s: show } = yarg
console.log(yarg)
console.log(":V")

const dir = 'outputs'
const filePath = `tabla-${base}.txt`
var content = `
=================================
=======Tabla del ${base}===============
=================================
`
for (let index = 1; index <= Limit; index++) {
    var result = base * index
    content = content.concat("\n" + `${base} x ${index} = ${result}`)

}

if (!existsSync(dir)) {
    mkdirSync(dir);
}

writeFile(`${dir}/${filePath}`, content, err => {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!!");
});

if (show)
    console.log(content)

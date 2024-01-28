import fs from 'fs'
import path from 'path'
import readline from 'readline'

const __dirname = path.resolve()

const filePath = path.join(__dirname, 'src', 'streams', 'files', 'fileToWrite.txt')

const write = async () => {
    const writableStream = fs.createWriteStream(filePath)

    writableStream.on('error', err => {
        throw new Error(err)
    })

    const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Enter text: '
    })

    readlineInterface.prompt()

    readlineInterface.on('line', line => {
        writableStream.write(line)
        readlineInterface.close()
    }).on('close', () => {
        writableStream.end()
        process.exit()
    })
};

await write();
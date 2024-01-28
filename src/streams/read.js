import fs from 'fs'
import path from 'path'

const __dirname = path.resolve()

const filePath = path.join(__dirname, 'src', 'streams', 'files', 'fileToRead.txt')

const read = async () => {
    const readableStream = fs.createReadStream(filePath)

    readableStream.on('error', err => {
        throw new Error(err)
    })

    readableStream.on('data', chunck => {
        process.stdout.write(chunck)
    })
};

await read();
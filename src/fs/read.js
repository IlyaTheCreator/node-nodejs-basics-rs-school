import fs, { promises as fsPromises } from 'fs'
import path from 'path'

const __dirname = path.resolve()

const fileToRead = path.join(__dirname, 'src', 'fs', 'files', 'fileToRead.txt')
const taskErrorText = 'FS operation failed'

const read = async () => {
    const fileExistenceCheck = fs.existsSync(fileToRead)

    if (!fileExistenceCheck) {
        throw new Error(taskErrorText)
    }

    const fileContents = await fsPromises.readFile(fileToRead, 'utf-8')

    console.log(fileContents)
};

await read();
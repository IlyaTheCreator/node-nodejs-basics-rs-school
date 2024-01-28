import fs, { promises as fsPromises } from 'fs'
import path from 'path'

const __dirname = path.resolve()

const initialFile = path.join(__dirname, 'src', 'fs', 'files', 'wrongFilename.txt')
const newFile = path.join(__dirname, 'src', 'fs', 'files', 'properFilename.md')
const taskErrorText = 'FS operation failed'

const rename = async () => {
    const initialFileExistenceCheck = fs.existsSync(initialFile)
    const newFileExistenceCheck = fs.existsSync(newFile)

    if (!initialFileExistenceCheck) {
        throw new Error(taskErrorText)
    }

    if (newFileExistenceCheck) {
        throw new Error(taskErrorText)
    }

    fs.renameSync(initialFile, newFile)
};

await rename();
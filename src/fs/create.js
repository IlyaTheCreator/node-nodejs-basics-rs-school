import fs, { promises as fsPromises } from 'fs'
import path from 'path'

const __dirname = path.resolve()

const taskFilePath = path.join(__dirname, 'src', 'fs', 'files', 'fresh.txt')
const taskFileText = 'I am fresh and young'
const taskErrorText = 'FS operation failed'

const create = async () => {
    const fileExistenceCheck = fs.existsSync(taskFilePath)

    if (fileExistenceCheck) {
        throw new Error(taskErrorText)
    }

    try {
        await fsPromises.writeFile(taskFilePath, taskFileText)
    } catch (err) {
        throw new Error(err)
    }
};

await create();
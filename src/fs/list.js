import fs, { promises as fsPromises } from 'fs'
import path from 'path'

const __dirname = path.resolve()

const taskFolder = path.join(__dirname, 'src', 'fs', 'files')
const taskErrorText = 'FS operation failed'

const list = async () => {
    const taskFolderExistenceCheck = fs.existsSync(taskFolder)

    if (!taskFolderExistenceCheck) {
        throw new Error(taskErrorText)
    }

    const filesArray = await fsPromises.readdir(taskFolder)

    console.log(filesArray)
};

await list();
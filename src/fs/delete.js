import fs, { promises as fsPromises } from 'fs'
import path from 'path'

const __dirname = path.resolve()

const fileToDelete = path.join(__dirname, 'src', 'fs', 'files', 'fileToRemove.txt')
const taskErrorText = 'FS operation failed'

const remove = async () => {
    const fileExistenceCheck = fs.existsSync(fileToDelete)

    if (!fileExistenceCheck) {
        throw new Error(taskErrorText)
    }

    fs.unlinkSync(fileToDelete)
};

await remove();
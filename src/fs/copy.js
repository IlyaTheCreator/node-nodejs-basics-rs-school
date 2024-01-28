import fs, { promises as fsPromises } from 'fs'
import path from 'path'

const __dirname = path.resolve()

const taskFolderToCopyPath = path.join(__dirname, 'src', 'fs', 'files')
const taskCopiedFolderPath = path.join(__dirname, 'src', 'fs', 'files_copy')
const taskErrorText = 'FS operation failed'

const copy = async () => {
    const copiedFolderExistenceCheck = fs.existsSync(taskCopiedFolderPath)
    const folderToCopyExistenceCheck = fs.existsSync(taskFolderToCopyPath)

    if (!folderToCopyExistenceCheck) {
        throw new Error(taskErrorText)
    }

    if (copiedFolderExistenceCheck) {
        throw new Error(taskErrorText)
    }

    await fsPromises.mkdir(taskCopiedFolderPath)

    const filesToCopyList = await fsPromises.readdir(taskFolderToCopyPath)

    for (const fileToCopy of filesToCopyList) {
        await fsPromises.copyFile(`${taskFolderToCopyPath}/${fileToCopy}`, `${taskCopiedFolderPath}/${fileToCopy}`)
    }
};

await copy();

import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const __dirname = path.resolve()
const filePath = path.join(__dirname, 'src', 'hash', 'files', 'fileToCalculateHashFor.txt')

const calculateHash = async () => {
    const readStream = fs.createReadStream(filePath)
    const hash = crypto.createHash('sha256')
    
    hash.setEncoding('hex')

    readStream.on('end', () => {
        hash.end()
        
        console.log(hash.read())
    })

    readStream.pipe(hash)
};

await calculateHash();
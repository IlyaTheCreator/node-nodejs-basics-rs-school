import readline from 'readline'
import { Transform } from 'stream'

const transform = async () => {
    const reverseTransformStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse())
        }
    })


    reverseTransformStream.pipe(process.stdout)

    const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Enter text to reverse: "
    })

    readlineInterface.prompt()

    readlineInterface.on('line', line => {
        reverseTransformStream.write(line)
        readlineInterface.close()
    }).on('close', () => {
        reverseTransformStream.end()
        process.exit()
    })
};

await transform();
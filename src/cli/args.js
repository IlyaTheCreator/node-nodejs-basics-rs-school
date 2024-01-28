const executionPathArgumentIndex = 0
const filePathArgumentIndex = 1

const parseArgs = () => {
    process.argv.forEach((_, argIndex) => {
        const argName = process.argv[argIndex]
        const argValue = process.argv[argIndex + 1]

        if (argIndex === executionPathArgumentIndex || argIndex === filePathArgumentIndex) {
            return
        }

        if (argIndex % 2 !== 0) {
            return
        }

        process.stdout.write(`${argName.slice(2, argName.length)} is ${argValue}, `)
    })
};

parseArgs();
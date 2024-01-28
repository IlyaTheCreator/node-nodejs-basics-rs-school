const parseEnv = () => {
    Object.keys(process.env).forEach(envKey => {
        console.log(`RSS_${envKey}=${process.env[envKey]}`)
    })
};

parseEnv();
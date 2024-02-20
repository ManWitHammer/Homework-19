const fs = require('fs')

const createHTML = () => {
    fs.writeFile('./index.html',
    `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <link rel="stylesheet" href="styles/style1.css" />
        </head>
        <body>
            <script src="script.js"></script>
        </body>
    </html>
    `, (error) => {
        error ? console.log(error) : null
    })
}

const createStyles = () => {
    fs.mkdir('./styles', { recursive: true }, (error) => {
        error? console.log(error) : null
        fs.writeFileSync('./styles/style1.css',
        `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        `, (error) => {
            error ? console.log(error) : null
        })
    })
}

const deleteAll = () => {
    if (fs.existsSync('./styles/style1.css')) {
        fs.unlink('./styles/style1.css', () => { });
    }
    if (fs.existsSync('./index.html')) {
        fs.unlink('./index.html', () => { });
    }
    if (fs.existsSync('./styles')) {
        fs.rmdir('./styles', () => {})
    }   
}

const createScript = () => {
    fs.writeFile('./script1.js',
    `
    const lodash = require('lodash')

    console.log(lodash.camelCase('hello world my singer is gAy'))
    console.log(lodash.isEmpty(null))
    console.log(lodash.isEqual(1, 2))
    console.log(lodash.flatMapDeep([1, 2, 3], (el) => [el, el]))
    `,
    (error) => {
        error ? console.log(error) : null
    })
}

console.log(createScript())
console.log(createHTML())
console.log(createStyles())
console.log(deleteAll())
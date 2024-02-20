
    const lodash = require('lodash')

    console.log(lodash.camelCase('hello world my singer is gAy'))
    console.log(lodash.isEmpty(null))
    console.log(lodash.isEqual(1, 2))
    console.log(lodash.flatMapDeep([1, 2, 3], (el) => [el, el]))
    
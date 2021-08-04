const argv = require('yargs')
    .option('b',{
        alias: "base",
        type: 'number',
        demandOption: true,
        describe: "Es la base de la tabla de multiplicar"
    })
    .option('l',{
        alias: "listar",
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: "Imprime la tabla en consola"
    })
    .option('h',{
        alias: "hasta",
        type: 'number',
        demandOption: false,
        default: 10,
        describe: "Hasta que numero se genera la tabla"
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw "La base tiene que ser un número"
        }
        if(isNaN(argv.h)){
            throw "El numero máximo tiene que ser un número"
        }
        return true
    })
    .argv

module.exports = argv;
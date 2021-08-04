// const fs = require('fs')
// import {crearArchivo} from './helpers/multiplicar'
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

console.log(argv);

const {base, listar, hasta} = argv
// const [,,arg3 = 'base=5'] = process.argv
// const [, base=5] = arg3.split('=')
// console.log(base);
// // const base = 22

crearArchivo(base, listar, hasta)
.then(file=>console.log(`Archivo ${file} creado correctamente`))
.catch(error=>console.log(error))
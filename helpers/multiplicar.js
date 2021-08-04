// import fs from 'fs'
const fs = require('fs')
const colors = require('colors');

const crearArchivo = async(base, listar, hasta) => {
    
    let salida, consola = ''

    for(let i=1; i<=hasta; i++){
        consola += `${base} ${'x'.red} ${i} ${'='.yellow} ${base*i}\n`
        salida += `${base} x ${i} = ${base*i}\n`
    }

    if(listar){
        console.log('*******************');
        console.log('Tabla del:', base);
        console.log('*******************');
        console.log(consola);
    }

    // fs.writeFile( `tabla-${base}.txt`, salida, (err)=>{
    //     if(err) throw err;
    //     console.log('Archivo creado');
    // })
    try{
        fs.writeFileSync( `tablas/tabla-${base}.txt`, salida )
        return `tabla-${base}.txt`
    }catch(error){
        throw "asd"
    }
}

module.exports = {
    crearArchivo
}
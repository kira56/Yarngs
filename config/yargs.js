const options = {
    descripcion: {
        demand: true,
        alias: 'd',
        des: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        des: 'Marca como completado o pendiente la tarea'
    }
}

module.exports.argv = require('yargs')
    .command('crear', 'Genera archivos', options)
    .command('actualizar', 'Actualiza los datos', options)
    .command('borrar', 'Borra los datos', options)
    .help()
    .argv;

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea a hacer.'
};

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea.'

};




const argv = require('yargs')
    .command('crear', 'Crea un elemento en la lista', {
        descripcion
    })
    .command('actualizar', 'Actualiza un elemento en la lista', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento de la lista', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}
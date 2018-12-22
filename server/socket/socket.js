//IO = backend
const { io } = require('../server');
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'welcome to pag'
    });





    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escuchar cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({ resp: 'todo salio bien' })
        // } else {
        //     callback({ resp: 'todo salio mal' })
        // }
        // // callback();
    })

})
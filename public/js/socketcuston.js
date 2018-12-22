var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
// on para escuchar
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

//emits envian informacion
socket.emit('enviarMensaje', {
    usuario: 'daniel',
    mensaje: 'hola mundo'
}, function(res) {
    console.log('respuesta del servidoe: ', res);
});

//escuchar informacion
socket.on('enviarMensaje', function(res) {
    console.log('infor del servidor', res);
})
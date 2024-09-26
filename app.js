// Importar el módulo http
const http = require('http');

// Definir el puerto
const PORT = process.env.PORT || 8080;

// Crear el servidor
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Código de estado 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Tipo de contenido
    res.end('¡Hola, mundo! Este es mi servidor Node.js corriendo en Docker.\n'); // Respuesta
});

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});

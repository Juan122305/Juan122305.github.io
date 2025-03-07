//http: Permite crear un servidor web en Node.js
import http from 'http';
// fs: Permite interactuar con el sistema de archivos (leer archivos HTML)
import fs from 'fs';

// Función para mostrar la página de bienvenida
function darBienvenida(req, res) {
    fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
            // Código 500: Error interno del servidor
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!! Algo salió mal.');
            return;
        }
        // 200: Respuesta exitosa
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

// Función para obtener los datos en JSON
function getEscuelas(req, res) {
    const escuelas = [
        {
            "nombre": "Escuela Benito Juárez",
            "direccion": "Av. Principal 123, Ciudad de México"
        },
        {
            "nombre": "Escuela Sor Juana",
            "direccion": "Calle Hidalgo 456, Guadalajara"
        }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // JSON.stringify convierte un objeto en una cadena JSON para enviarlo correctamente
    res.end(JSON.stringify(escuelas));
}

// Función para mostrar la página de escuelas
function mostrarEscuelas(req, res) {
    fs.readFile('escuelas.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

// Función para mostrar la página de donantes
function mostrarDonantes(req, res) {
    fs.readFile('donantes.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

// Función para obtener los datos de los donantes en formato JSON
function getDonantes(req, res) {
    const donantes = [
        {
            "nombre": "Fundación Torres",
            "monto": "100000 Pesos"
        },
        {
            "nombre": "Juan Pablo",
            "monto": "25,000 Pesos"
        }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(donantes));
}

// Función para manejar rutas no encontradas
function manejarRuta404(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('¡Oops! No se encontró la página que buscas.');
}

// Función para mostrar la página del equipo del proyecto
function mostrarEquipo(req, res) {
    fs.readFile('equipo.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!! No se pudo cargar la página del equipo.');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

// Función para mostrar la página de opiniones
function mostrarOpinion(req, res) {
    fs.readFile('opinion.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

// Creación del servidor HTTP
// Documentación de createServer: https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
const servidor = http.createServer((req, res) => {
    const url = req.url;
    
    if (url === '/') {
        darBienvenida(req, res);
    } else if (url === '/api/escuelas') {
        getEscuelas(req, res);
    } else if (url === '/api/donantes') {
        getDonantes(req, res);
    } else if (url === '/escuelas') {
        mostrarEscuelas(req, res);
    } else if (url === '/donantes') {
        mostrarDonantes(req, res);
    } else if (url === '/equipo') {
        mostrarEquipo(req, res);
    } else if (url === '/opinion') {
        mostrarOpinion(req, res);
    } else {
        manejarRuta404(req, res);
    }
});

//FreedomBox es un servidor personal de código abierto y gratuito que permite ejecutar servicios digitales en casa.

const puerto = 1984;
servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});

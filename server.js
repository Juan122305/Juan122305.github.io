import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

app.get('/random-dog', async (req, res) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/images/search');
        const dogImage = response.data[0].url; // Extraemos la URL de la imagen

        // Enviar HTML con la imagen
        res.send(`
            <html>
                <body style="text-align: center;">
                    <h1>Perro Aleatorio 🐶</h1>
                    <img src="${dogImage}" alt="Perro" width="300">
                </body>
            </html>
        `);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la imagen' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

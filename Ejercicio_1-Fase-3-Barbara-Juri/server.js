const express = require ('express');
const app = express();


app.get('/hora', (req, res) =>{
    const hora = new Date().getHours();
    let mensaje ='';
    if (hora>=6 && hora<=12) {
        mensaje = 'Buenos dias!';
    }
    else if (hora>=13 && hora<=19) {
        mensaje = 'Buenas tardes!';
    }
    else if(hora>=20 && hora<=5) {
        mensaje = 'Buenas noches';
    }
    res.status(200).send(`<h2 style="color: blue">${mensaje}</h2>`)
})


const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
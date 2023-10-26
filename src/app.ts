import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 2000;

// Configurar del sistema de plantilla EJS 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Crear primer ruta, configuracion >Ruta Home
app.get('/', (req: Request, res: Response) => {
	res.render('home'); // home es el nombre de la vista que quiero renderizar
});

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto: ${port}`); // para que la muestre
});
import express from 'express';
import { Router } from 'express';
const app = express();
const route = Router();
app.use(express.json());
route.get('/', (req, res) => {
    res.send('Hello World!, with Typescript!');
});
app.use(route);
app.listen(3000, () => {
    console.log('Servidor is rodando na port 3000');
});

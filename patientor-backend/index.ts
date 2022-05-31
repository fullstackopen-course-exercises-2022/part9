import express from 'express';
import patientRouters from './routers/patientRouters';
import diagnoseRouters from './routers/diagnoseRouters';
import cors from 'cors';
const app = express();
app.use(express.json());

const PORT = 3002;

app.get('/ping', (_req: any, res: any) => {
    res.send('<h1>Pong</h1>');
});

app.use(cors());

app.use('/api/diagnoses', diagnoseRouters);
app.use('/api/patients', patientRouters);

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
import express from 'express';
const app = express();
const PORT = 3002;
import calculateBmi from './bmiCalculator'

app.use(express.json())

app.get('/hello', (_req, res) => {
    res.send("<h1>Hello Full Stack</h1>");
})

app.get('/bmi', (req, res) => {
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);
    if(!weight || !height) {
        throw new Error('malformed parameters');
    } else {
        res.json({
            weight,
            height,
            bmi: calculateBmi(height, weight)
        })
    }
})

app.listen(PORT, () => {
    console.log(`PORT listening on ${PORT}!`);
})

import express from 'express';
const app = express();
const PORT = 3002;
import calculateBmi from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send("<h1>Hello Full Stack</h1>");
});

app.get('/bmi', (req, res) => {
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);
    if(!weight || !height) {
        res.status(400).send({ msg: 'Malformed parameters!' });
    } else {
        res.json({
            weight,
            height,
            bmi: calculateBmi(height, weight)
        });
    }
});

app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { target, daily_exercises } = req.body;

    if(!target || !daily_exercises) {
        res.status(400).send({ msg: 'Malformed parameters!' });
    } else {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            const response = calculateExercises(daily_exercises, Number(target));
            res.send(response);
        } catch(err) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            res.status(500).send({ msg: err });
        }
    }

});

app.listen(PORT, () => {
    console.log(`PORT listening on ${PORT}!`);
});

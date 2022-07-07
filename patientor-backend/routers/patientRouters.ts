import patientService from '../services/patientService';
import express, { Request, Response } from 'express';
import { toNewPatientEntry } from '../utils';
const router = express.Router();

router.get('/', (_req, res) => {
    const response = patientService.getNonSensitivePatientData();
    res.send(response);
});

router.get('/:patientId', (req: Request, res: Response) => {
    const { patientId } = req.params;
    const singlePatient = patientService.findPatientById(patientId);
    res.json(singlePatient);
})

router.post('/', (req, res) => {
    const patient = toNewPatientEntry(req.body)
    const newPatient = patientService.addPatients(patient);
    res.send(newPatient);
});

router.post('/:id/entries', (req, res) => {
    const entry = req.body;
    const patientId = req.params.id;
    const newEntry = patientService.addEntry(entry, patientId);
    res.send(newEntry);
})

export default router;
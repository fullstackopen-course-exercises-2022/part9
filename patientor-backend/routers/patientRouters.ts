import patientService from '../services/patientService';
import express from 'express';
import toNewPatientEntry from "../utils";
const router = express.Router();

router.get('/', (_req, res) => {
    const response = patientService.getNonSensitivePatientData();
    res.send(response);
});

router.post('/', (req, res) => {
    const patient = toNewPatientEntry(req.body)
    const newPatient = patientService.addPatients(patient);
    res.send(newPatient);
});

export default router;
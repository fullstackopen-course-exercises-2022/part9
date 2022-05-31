import patientService from '../services/patientService';
import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
    const response = patientService.getNonSensitivePatientData();
    res.send(response);
})

router.post('/', (req, res) => {
    const { name, dateOfBirth, gender, ssn, occupation } = req.body;
    const newPatient = patientService.addPatients({ name, dateOfBirth, gender, ssn, occupation });
    res.send(newPatient);
})

export default router;
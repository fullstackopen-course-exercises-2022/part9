import patientService from '../services/patientService';
import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
    const response = patientService.getNonSensitivePatientData()
    res.send(response)
})

export default router;
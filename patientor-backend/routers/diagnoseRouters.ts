import express from 'express';
const router = express.Router();
import patientService from '../services/patientService';

router.get('/', (_req, res) => {
    const response = patientService.getDiagnoses()
    res.send(response)
})

export default router;
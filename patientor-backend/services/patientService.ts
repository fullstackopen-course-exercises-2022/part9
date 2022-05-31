import diagnoseData from '../data/diagnoseData';
import patientsData from '../data/patientsData';
import { IDiagnose, IPatients, NonSensitivePatientData } from '../types';

const diagnoses: Array<IDiagnose> = diagnoseData as Array<IDiagnose>;
const patients: Array<IPatients> = patientsData as Array<IPatients>;

const getDiagnoses = (): Array<IDiagnose> => {
    return diagnoses;
}

const getNonSensitivePatientData = (): NonSensitivePatientData[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const getPatients = () => {}

const addPatients = () => {}

export default {
    getDiagnoses,
    getPatients,
    addPatients,
    getNonSensitivePatientData
}
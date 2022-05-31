import diagnoseData from '../data/diagnoseData';
import patientsData from '../data/patientsData';
import { IDiagnose, IPatients, NonSensitivePatientData, NewPatient } from '../types';
import { v1 as uuid } from 'uuid';

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

const addPatients = (entry: NewPatient): IPatients => {
    const addPatient = {
        id: uuid(),
        ...entry
    }
    patients.push(addPatient);
    return addPatient;
}

export default {
    getDiagnoses,
    addPatients,
    getNonSensitivePatientData
};
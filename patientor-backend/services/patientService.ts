import diagnoseData from '../data/diagnoseData';
import patientsData from '../data/patientsData';
import { IDiagnose, IPatients, NonSensitivePatientData, NewPatient, Entry } from '../types';
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

const findPatientById = (id: string): IPatients | undefined => {
    return patients.find((patient) => patient.id === id);
}

const addEntry = (entry: Entry, patientId: string): Entry => {
    const patient = findPatientById(patientId);
    const newEntry = {
        ...entry,
        id: uuid()
    };

    patient?.entries?.push(newEntry);
    return newEntry;
}

export default {
    getDiagnoses,
    addPatients,
    getNonSensitivePatientData,
    findPatientById,
    addEntry
};
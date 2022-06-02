import { Gender, NewPatient } from './types';

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown): string => {
    if(!name || !isString(name)) {
        throw new Error('Missing name!');
    }
    return name;
};

const isGender = (params: any): params is Gender => {
    return Object.values(Gender).includes(params);
};

const parseGender = ( gender: unknown ): Gender => {
    if(!gender ||!isGender(gender)) {
        throw new Error('You must select Male or Female!')
    }
    return gender;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
    if(!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
        throw new Error('Missing birthday!' + dateOfBirth);
    }
    return dateOfBirth;
};

const parseOccupation = (occupation: any): string => {
    if(!occupation || !isString(occupation)) {
        throw new Error('Missing occupation!');
    }
    return occupation;
};

const parseSsn = (ssn: any): string => {
    if(!ssn || !isString(ssn)) {
        throw new Error('Missing Social Security Number');
    }
    return ssn;
};

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown };

const toNewPatientEntry = ({ name, dateOfBirth, ssn, gender, occupation }: Fields): NewPatient => {
    const newEntry: NewPatient = {
        name: parseName(name),
        dateOfBirth: parseDateOfBirth(dateOfBirth),
        ssn: parseSsn(ssn),
        gender: parseGender(gender),
        occupation: parseOccupation(occupation)
    };
    return newEntry;
};

export default toNewPatientEntry;
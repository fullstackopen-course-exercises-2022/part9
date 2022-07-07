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

const parseDate = (date: unknown): string => {
    if(!date || !isString(date) || !isDate(date)) {
        throw new Error('Missing birthday!' + date);
    }
    return date;
};

const parseOccupation = (occupation: any): string => {
    if(!occupation || !isString(occupation)) {
        throw new Error('Missing occupation!');
    }
    return occupation;
};

const parseSpecialist = (specialist: any): string => {
    if(!specialist || !isString(specialist)) {
        throw new Error('Please a Specialist!');
    }

    return specialist;
}

const parseDiagnosisCodes = (diagnosisCodes: any): string => {
    if(!diagnosisCodes || !isString(diagnosisCodes)) {
        throw new Error('Add diagnosis code!');
    }

    return diagnosisCodes
}

const parseSsn = (ssn: any): string => {
    if(!ssn || !isString(ssn)) {
        throw new Error('Missing Social Security Number');
    }
    return ssn;
};

const parseDescription = (description: any): string => {
    if(!description || !isString(description)) {
        throw new Error('Add a description!')
    }

    return description
}

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown };

export const toNewPatientEntry = ({ name, dateOfBirth, ssn, gender, occupation }: Fields): NewPatient => {
    return {
        name: parseName(name),
        dateOfBirth: parseDate(dateOfBirth),
        ssn: parseSsn(ssn),
        gender: parseGender(gender),
        occupation: parseOccupation(occupation),
        entries: []
    };
};

type EntryFields = { description: unknown, date: unknown, specialist: unknown, diagnosisCodes: unknown }

export const toNewEntry = ({ description, date, specialist, diagnosisCodes }: EntryFields, /* object: Entry */) => {
    // let types = ''
    // switch(object.type) {
    //     case 'Hospital':
    //         return {};
    //     case 'HealthCheck':
    //         return {};
    //     case 'OccupationalHealthcare':
    //         return {};
    // }

    return {
        description: parseDescription(description),
        date: parseDate(date),
        specialist: parseSpecialist(specialist),
        diagnosisCodes: parseDiagnosisCodes(diagnosisCodes)
    };
}


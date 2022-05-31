export enum Gender {
  Male = 'male',
  Female = 'female'
}

export interface IDiagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface IPatients {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export type NonSensitivePatientData = Omit<IPatients, 'ssn'>;
export type NewPatient = Omit<IPatients, 'id'>;


import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { apiBaseUrl } from '../constants';
import { Diagnosis, Entry, Gender, Patient } from '../types';
import { MdMale, MdFemale } from 'react-icons/md';
import { setDiagnosisList, useStateValue } from '../state';
import EntryDetails from './EntryDetails';
import {Button, Card} from '@material-ui/core';


const PatientPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [patient, setPatient] = useState<Patient | undefined>();
    const [{ diagnosis }, dispatch] = useStateValue();
    useEffect(() => {
        void fetchPatient();
        void fetchDiagnosis();
    }, []);

    const fetchPatient = async () => {
        const { data: patientDetails } = await axios.get<Patient>(
            `${apiBaseUrl}/patients/${id}`
        );
        setPatient(patientDetails);
    };
    const fetchDiagnosis = async () => {
        const { data: diagnosisDetails } = await axios.get<Diagnosis[]>(
            `${apiBaseUrl}/diagnoses`
        );
        dispatch(setDiagnosisList(diagnosisDetails));
    };

    const getGender = (gender: Gender | undefined) => {
        switch(gender) {
            case Gender.Male:
                return <MdMale size={30} />;
            case Gender.Female:
                return <MdFemale size={30} />;
            default: return <MdMale />;
        }
    };

    // const getDiagnosisName = (code: string): string => {
    //     console.log(diagnosis[code]?.name);
    //     return diagnosis[code]?.name;
    // };
    return (
        <div>
            <h1>{patient?.name}</h1>
            {getGender(patient?.gender)}
            <p>ssn: {patient?.ssn}</p>
            <p>occupation: {patient?.occupation}</p>
            <h3>Entries</h3>
            {patient?.entries?.map((entry: Entry) => (
                <Card style={{ margin: '1rem 0 0 0', padding: '1rem' }} key={entry.id}>
                    <p>{entry.date}</p>
                    <p>{entry.description}</p>
                    <ul>
                        {entry.diagnosisCodes && (
                            <div>
                                <h3>Diagnosis</h3>
                                {entry.diagnosisCodes.map((code) => (
                                    <li key={code}>{code} {diagnosis[code]?.name ?? 'invalid code'}</li>
                                ))}
                            </div>
                        )}
                    </ul>
                    <EntryDetails entry={entry} />
                </Card>
            ))}
            <br />
            <Button variant='outlined'>Add New Entry</Button>
        </div>
    );
};

export default PatientPage;
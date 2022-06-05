import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {apiBaseUrl} from '../constants';
import {Gender, Patient} from '../types';
import { MdMale, MdFemale } from 'react-icons/md';

const PatientPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [patient, setPatient] = useState<Patient | undefined>();
    useEffect(() => {
        const fetchPatient = async () => {
            const { data: patientDetails } = await axios.get<Patient>(
                `${apiBaseUrl}/patients/${id}`
            );
            setPatient(patientDetails);
            console.log(patientDetails);
        };
        void fetchPatient();
    }, []);
    const getGender = (gender: Gender | undefined) => {
        switch(gender) {
            case Gender.Male:
                return <MdMale size={30} />;
            case Gender.Female:
                return <MdFemale size={30} />;
            default: return <MdMale />;
        }
    };
    return (
        <div>
            <h1>{patient?.name}</h1>
            {getGender(patient?.gender)}
            <p>ssn: {patient?.ssn}</p>
            <p>occupation: {patient?.occupation}</p>
        </div>
    );
};

export default PatientPage;
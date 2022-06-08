import React, { FC } from 'react';
import { Entry } from '../types';
import HealthCheckEntry from "./HealthCheckEntry";
import HospitalEntry from "./HospitalEntry";
import OccupationalHealthcareEntry from "./OccupationalHealthcareEntry";

const EntryDetails: FC<{entry: Entry}> = ({entry}) => {
    console.log(entry);
    switch(entry.type) {
        case 'HealthCheck':
            return (
                <HealthCheckEntry entry={entry} />
            );
        case 'Hospital':
            return (
                <HospitalEntry entry={entry} />
            );
        case 'OccupationalHealthcare':
            return (
              <OccupationalHealthcareEntry entry={entry} />
            );
        default: return null;
    }
};

export default EntryDetails;
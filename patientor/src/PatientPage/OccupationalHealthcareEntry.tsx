import React, { FC } from 'react';
import { Card } from '@material-ui/core';

const OccupationalHealthcareEntry: FC<{ entry: any }> = ({ entry }) => {
    return (
        <Card style={{ padding: '1rem' }}>
            <h3>{entry.type}</h3>
            <p>Employer Name: {entry.employerName}</p>
            {entry.sickLeave && (
                <div>
                    <p>Start Date: {entry.sickLeave.startDate}</p>
                    <p>End Date: {entry.sickLeave.endDate}</p>
                </div>
            )}
        </Card>
    );
};

export default OccupationalHealthcareEntry;
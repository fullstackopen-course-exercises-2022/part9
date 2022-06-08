import React, { FC } from 'react';
import { Card } from '@material-ui/core';

const HospitalEntry: FC<{entry: any}> = ({ entry }) => {
    return (
        <Card style={{ margin: '1rem', padding: '1rem' }}>
            <h3>{entry.type}</h3>
            <p>Discharge notes: {entry.discharge.criteria}</p>
            <p>Discharge Date: {entry.discharge.date}</p>
        </Card>
    );
};

export default HospitalEntry;
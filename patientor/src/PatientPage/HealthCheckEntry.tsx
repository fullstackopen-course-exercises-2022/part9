import React, { FC } from 'react';
import { Card } from '@material-ui/core';

const HealthCheckEntry: FC<{ entry: any }> = ({ entry }) => {
    return (
        <Card style={{ padding: '1rem' }}>
            <h3>{entry.type}</h3>
            <p>health rating: {entry.healthCheckRating}</p>
        </Card>
    );
};

export default HealthCheckEntry;
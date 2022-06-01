import React from 'react';

const Total = ({ parts }: any) => {
    const sumOfParts = parts.reduce((a: any, part: { exerciseCount: any; }) => a + part.exerciseCount, 0);
    return (
        <div>
            Number of Exercises {' '}
            {sumOfParts}
        </div>
    );
}

export default Total;
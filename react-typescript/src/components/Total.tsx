import React, { FC } from 'react';
import { CoursePart } from '../types';

const Total: FC<({ parts: CoursePart[] })> = ({ parts }) => {
    const sumOfParts = parts.reduce((a: any, part: { exerciseCount: any; }) => a + part.exerciseCount, 0);
    return (
        <div>
            Number of Exercises {' '}
            {sumOfParts}
        </div>
    );
}

export default Total;
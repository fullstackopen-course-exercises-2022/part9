import React, { FC } from 'react';
import Parts from './Parts';
import { CoursePart } from '../types';

const Content: FC<({ parts: CoursePart[] })> = ({ parts }) => {
    return (
        <div>
            {parts.map((part: CoursePart) => (
                <Parts key={part.name} part={part} />
            ))}
        </div>
    );
}

export default Content;
import React, { FC } from 'react';
import assertNever from '../util';
import { CoursePart } from '../types';

const Parts: FC<({ part: CoursePart })> = ({ part }) => {
    switch(part.name) {
        case ('Fundamentals'):
            return (
                <div>
                    <p>
                        <b>{part.name} {part.exerciseCount}</b>
                    </p>
                    <p>{part.description}</p>
                    <p>{part.type}</p>
                </div>
            );
        case ('Using props to pass data'):
            return (
                <div>
                    <p>
                        <b>{part.name} {part.exerciseCount}</b>
                    </p>
                    <p>Number of group projects {part.groupProjectCount}</p>
                    <p>{part.type}</p>
                </div>
            )
        case ('Deeper type usage'):
            return (
                <div>
                    <p>
                        <b>{part.name} {part.exerciseCount}</b>
                    </p>
                    <p>{part.description}</p>
                    <p>{part.exerciseSubmissionLink}</p>
                    <p>{part.type}</p>
                </div>
            )
        default: return assertNever(part)
    }

}

export default Parts;
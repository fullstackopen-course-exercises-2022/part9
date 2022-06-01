import React, { FC } from 'react';

const Header: FC <({ name: string })> = ({ name }) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

export default Header;
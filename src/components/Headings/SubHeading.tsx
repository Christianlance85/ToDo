import React from 'react';

type Props = {
    children: string
};

const Heading = ({ children }: Props) => {
    return <h1 className='text-2xl font-proxima'>
        {children}
    </h1>;
};

export default Heading;

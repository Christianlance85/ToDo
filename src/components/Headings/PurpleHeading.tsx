import React from 'react';

type Props = {
    children: string
};

const Heading = ({ children }: Props) => {
    return <h1 className='text-4xl font-bold font-proxima text-primary'>
        {children}
    </h1>;
};

export default Heading;

import React from 'react';

type Props = {
    children?: JSX.Element | JSX.Element[]
};

const P = ({ children }: Props) => {
    return <p className='text-base font-normal font-proxima'>{children}</p>;
};

export default P;

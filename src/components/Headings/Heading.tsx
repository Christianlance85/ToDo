import React from 'react';

type Props = {
  children: React.ReactNode

};

const Heading = ({ children }: Props) => {
  return <h1 className='font-bold text-7xl font-proxima '>{children}</h1>;
};

export default Heading;

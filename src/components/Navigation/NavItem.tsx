import React from 'react';

interface Props {
  title: string;
  href: string;
}

const NavItems = ({ title, href }: Props) => {
  return <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 font-proxima '>
    <a href={href}>{title}</a>
  </nav>;
};

export default NavItems;

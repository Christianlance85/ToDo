import React from 'react';
import PurpleHeading from '../Headings/PurpleHeading';
import NavItem from './NavItem';


function Navbar() {
    return <div data-testid='Test' className='flex content-between flex-1 w-full h-2 mx-8 align-middle border-b border-background max-h-12 font-proxima'>
        <div className='container flex flex-wrap items-center justify-between px-4 mx-auto'>

        </div>
        <div style={{ inlineSize: '-webkit-fill-available' }}>
            <PurpleHeading>
                To Do:
            </PurpleHeading>
        </div>
        <div className='justify-end mx-8'>
            <NavItem title='Home' href='/' />
        </div>
    </div >;
}

export default Navbar;

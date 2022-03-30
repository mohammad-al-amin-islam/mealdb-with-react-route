import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my project with router route and tailwind</h1>
            <Link to='/' className='mr-3 text-2xl'>Home</Link>
            <Link to='/restaurant' className='mr-3 text-2xl'>Restaurant</Link>
        </div>
    );
};

export default Header;
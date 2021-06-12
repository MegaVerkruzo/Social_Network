import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="block_text">
                <a>Profile</a>
            </div>
            <div className="block_text">
                <a>Messages</a>
            </div>
            <div className="block_text">
                <a>News</a>
            </div>
            <div className="block_text">
                <a>Music</a>
            </div>
            <div className="block_text">
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
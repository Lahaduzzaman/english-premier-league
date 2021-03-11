import React from 'react';
import './Header.css'


const Header = (props) => {
    const teamLogo = props.logo;
    return (
        <div className='top-banner'>
            <div className='logo'>
                {
                    teamLogo === '' ? <h1><b>English Premier League</b></h1> : <img src={teamLogo} alt="" />
                }
            </div>
        </div>
    );
};

export default Header;
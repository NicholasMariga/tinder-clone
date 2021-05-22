import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>

            <IconButton>
                <PersonIcon fontSize="large" classname="header_icon"/>
            </IconButton>
            <img 
            className="header_logo"
            src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
            alt="">
            </img>
            <IconButton>
                <ForumIcon fontSize="large" classname="header_icon"/>
            </IconButton>
        
        </div>
    )
}
export default Header

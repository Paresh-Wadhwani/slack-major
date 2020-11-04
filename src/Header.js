import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

function Header()
{
    return(
        <div className = 'header'>
            <div className = 'header__left'>
                <Avatar
                    className = 'header__avatar'
                    src = 'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg'
                    // src = {user?.photoURL}
                    alt = 'something'
                />
                <AccessTimeIcon />
            </div>
            <div className = 'header__search'>
                <input placeholder = "Search in Channels, Users or Messages" type = "text" />
                <SearchIcon />
            </div>
            <div className = 'header__right'>
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header

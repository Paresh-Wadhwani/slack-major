import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';

function Header()
{
    return(
        <div className = 'header'>
            <div className = 'header__left'>
                <Avatar
                    className = 'header__avatar'
                    src = 'https://img.icons8.com/material/4ac144/256/user-male.png'
                    // src = {user?.photoURL}
                    alt = 'something'
                />
                <AccessTimeIcon />
                <SearchIcon />
            </div>
            <div className = 'header__search'>

            </div>
            <div className = 'header__right'>

            </div>
        </div>
    )
}

export default Header

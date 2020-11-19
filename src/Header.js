import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from './StateProvider.js';

function Header()
{
	const [{user}] = useStateValue();
    return(
        <div className = 'header'>
            <div className = 'header__left'>
                <Avatar
                    className = 'header__avatar'
                    src = {user?.photoURL}
                    alt = {user?.diaplayName}
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

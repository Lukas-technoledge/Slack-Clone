import React from 'react';
import './Header.css'
import ScheduleIcon from '@mui/icons-material/Schedule';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <ScheduleIcon />
            </div>

            <div className="header__search">
                <input type="text" placeholder='Search ALX-ND-C1' />
                <div className="searchIcons">
                    <FilterListIcon />
                    <SearchIcon className='search' />
                </div>
            </div>

            <div className="header__right">
                <HelpOutlineIcon />
                <Avatar variant="rounded">CO</Avatar>
            </div>
        </div>
    )
}

export default Header

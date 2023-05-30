import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiOutlineUser } from 'react-icons/hi';
import { DropdownData } from './DropdownData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';

const DropdownItem = (props: any) => {
    const isActive = window.location.pathname === props.link;

    return (
        <MenuItem disableRipple onClick={props.onClick} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>{props.text}</MenuItem>
    )
}


export default function ProfileDropdown(props: any) {
    const [itemActive, setItemActive] = useState("/");
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOut = () => {
        handleClose();
        props.setAccessToken("");
    }

    if(!props.userLogged) {
        return (
            <Link to="/Login" onClick={()=>{setItemActive("Login")}}>
                <button className="p-3 ml-8 mr-4 my-2 text-white text-lg bg-gray-800 rounded-xl focus:outline-none">Sign In</button>
            </Link>
        )
    }
    else {
        return (
            <div className="flex bg-gray-800 my-2 ml-8 mr-4 content-center rounded-xl">
                <button
                    className="mx-3 focus:outline-none"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <HiOutlineUser className="text-2xl text-white"/>
                </button>
                <Menu
                    PaperProps={{ style: { borderRadius: '12px', marginTop: '4px' } }}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <h1 className="text-xl m-4 px-4 text-gray-600 border-b">Private Area</h1>

                    {DropdownData.map((item, val) => (
                        <Link to={item.link} key={val} onClick={()=>{setItemActive(item.title)}}>
                            <DropdownItem onClick={handleClose} key={val} link={item.link} text={item.title} />
                        </Link>
                    ))}
                    <DropdownItem onClick={logOut} text="Log Out"/>
                </Menu>
            </div>
        );
    }
}

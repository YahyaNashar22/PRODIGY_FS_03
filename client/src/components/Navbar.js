import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { Menu, MenuItem, IconButton, Button } from '@mui/material';

import styles from "../styles/Navbar.module.css";
import { useSelector } from 'react-redux';

const Navbar = ({ setIsOpen }) => {
    const { user, loading } = useSelector((state) => state.user);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log(user)

    return (
        <nav className={styles.wrapper}>
            <ul className={styles.links}>
                <li className={styles.link} onClick={() => setIsOpen(false)}> <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to='/'>Home</NavLink></li>
                <li className={styles.link} onClick={() => setIsOpen(false)}> <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to='/store'>Store</NavLink></li>
                <li className={styles.link} onClick={() => setIsOpen(false)}> <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to='/about-us'>About us</NavLink></li>
                <li className={styles.link} onClick={() => setIsOpen(false)}> <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to='/contact-us'>Contact us</NavLink></li>
            </ul>
            {user && !loading ?
                <div className={styles.profileContainer}>
                    <IconButton onClick={handleClick} className={styles.profileButton}>
                        <img
                            src={`${process.env.REACT_APP_BACKEND_URL}${user.data.profilePicture}`}
                            alt='user profile'
                            className={styles.profilePicture}
                        />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => { handleClose(); setIsOpen(false) }}>
                            <Link to="/profile" className={styles.menuLink}>Profile</Link>
                        </MenuItem>
                        <MenuItem onClick={() => { handleClose(); setIsOpen(false) }}>
                            <Link to="/cart" className={styles.menuLink}>Cart</Link>
                        </MenuItem>
                        <MenuItem onClick={() => { handleClose(); setIsOpen(false) }} sx={{
                            height: 30, backgroundColor: "var(--primary-red)", "&:hover": {
                                backgroundColor: "var(--secondary-red)"
                            }
                        }}>
                            <Button className={styles.menuLink} sx={{ color: '#fff' }}>Sign Out</Button>
                        </MenuItem>
                    </Menu>
                </div>
                :
                <Link to="/sign-in-up" className={styles.singIn}>Sign in</Link>
            }
        </nav>
    )
}

export default Navbar
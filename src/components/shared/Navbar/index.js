import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/images/Logo.svg';
import styles from './style.module.css';
import ResponsiveMenuBtn from '../ResponsiveMenuBtn';
import Button from '../Button';
import BackDrop from '../BackDrop';
import NavLinks from './NavLinks';

const Navbar = () => {
	return (
		<>
			<nav className={styles.navbarContainer}>
				<div className={styles.navbarBrand}>
					<div className={styles.navbarLogoContainer}>
						<img src={Logo} alt='brand' />
					</div>
				</div>
				<ul className={styles.navbarLinks}>
					<NavLinks classes={styles.navbarLinkItem} />
				</ul>
				<div className={styles.menuIcon}>
					<ResponsiveMenuBtn />
				</div>
			</nav>
		</>
	);
};
export default Navbar;

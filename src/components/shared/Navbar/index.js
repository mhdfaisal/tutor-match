import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/images/Logo.svg';
import styles from './style.module.css';
import ResponsiveMenuBtn from '../ResponsiveMenuBtn';

const Navbar = () => {
	return (
		<nav className={styles.navbarContainer}>
			<div className={styles.navbarBrand}>
				<div className={styles.navbarLogoContainer}>
					<img src={Logo} alt='brand' />
				</div>
			</div>
			<ul className={styles.navbarLinks}>
				<li className={styles.navbarLinkItem}>
					<Link to='/'>Become a tutor</Link>
				</li>
				<li className={styles.navbarLinkItem}>
					<Link to='/'>Sign in</Link>
				</li>
				<li className={`${styles.navbarLinkItem} ${styles.menuIcon}`}>
					<ResponsiveMenuBtn />
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;

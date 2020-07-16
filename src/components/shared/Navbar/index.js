import React, { useState, useEffect } from 'react';

import Logo from '../../../assets/images/Logo.svg';
import styles from './style.module.css';
import ResponsiveMenuBtn from '../ResponsiveMenuBtn';
import BackDrop from '../BackDrop';
import NavLinks from './NavLinks';
import SideDrawer from '../SideDrawer';

const Navbar = () => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const openDrawerHandler = () => {
		setDrawerIsOpen(true);
	};

	const closeDrawerHandler = () => {
		setDrawerIsOpen(false);
	};
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			if (drawerIsOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}
		}
		return () => {
			mounted = false;
		};
	}, [drawerIsOpen]);
	return (
		<>
			{drawerIsOpen && <BackDrop onClick={closeDrawerHandler} />}
			<SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
				<ul className={styles.sideDrawerLinks}>
					<NavLinks classes={styles.navbarLinkItem} />
				</ul>
			</SideDrawer>
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
					<ResponsiveMenuBtn onClick={openDrawerHandler} />
				</div>
			</nav>
		</>
	);
};
export default Navbar;

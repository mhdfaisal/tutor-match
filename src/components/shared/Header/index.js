import React from 'react';

import Navbar from '../Navbar';
import styles from './style.module.css';

const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<Navbar />
		</header>
	);
};
export default Header;

import React from 'react';

import styles from './style.module.css';

export const SideDrawer = ({ children, show, onClick }) => {
	return (
		<div
			className={`${
				show ? styles.sideDrawer + ' ' + styles.sideDrawerActive : styles.sideDrawer
			}`}
		>
			<div onClick={onClick}>{children}</div>
		</div>
	);
};

export default SideDrawer;

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './style.module.css';

export const SideDrawer = ({ children, show, onClick }) => {
	return ReactDOM.createPortal(
		<div
			className={`${
				show ? styles.sideDrawer + ' ' + styles.sideDrawerActive : styles.sideDrawer
			}`}
		>
			<div onClick={onClick}>{children}</div>
		</div>,
		document.getElementById('side-nav-hook')
	);
};

export default SideDrawer;

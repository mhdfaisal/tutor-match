import React from 'react';
import ReactDOM from 'react-dom';

import styles from './style.module.css';

const BackDrop = () => {
	return ReactDOM.createPortal(
		<div className={styles.backdrop}></div>,
		document.getElementById('backdrop-hook')
	);
};
export default BackDrop;

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './style.module.css';

const BackDrop = ({ onClick }) => {
	return ReactDOM.createPortal(
		<div className={styles.backdrop} onClick={onClick}></div>,
		document.getElementById('backdrop-hook')
	);
};
export default BackDrop;

import React from 'react';

import styles from './style.module.css';

const Button = (props) => {
	const { classes, text, onClick } = props;
	const handleBtnClick = (e) => {
		e.preventDefault();
		if (onClick) {
			onClick();
		}
	};
	return (
		<button className={`${classes + ' ' + styles.defaultBtn}`} onClick={handleBtnClick}>
			{text}
		</button>
	);
};
export default Button;

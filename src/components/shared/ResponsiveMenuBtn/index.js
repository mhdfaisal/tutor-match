import React from 'react';

import styles from './style.module.css';

const ResponsiveMenuBtn = ({ onClick }) => {
	return (
		<div>
			<button className={styles.menuIconBtn} onClick={onClick}>
				<i>
					<span className='material-icons'>menu</span>
				</i>
			</button>
		</div>
	);
};
export default ResponsiveMenuBtn;

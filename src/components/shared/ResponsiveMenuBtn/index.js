import React from 'react';

import styles from './style.module.css';

const ResponsiveMenuBtn = () => {
	return (
		<div>
			<button className={styles.menuIconBtn}>
				<i>
					<span className='material-icons'>menu</span>
				</i>
			</button>
		</div>
	);
};
export default ResponsiveMenuBtn;

import React from 'react';

import Button from '../Button';
import styles from './style.module.css';

const SortBar = () => {
	return (
		<div className={styles.sortBarContainer}>
			<div className={styles.label}>
				<span>Sort by: </span>
			</div>
			<div className={styles.sorts}>
				<div className={styles.sortBtnsContainer}>
					<Button text='Name' classes={styles.sortBtn} />
					<Button text='City' classes={styles.sortBtn} />
				</div>
			</div>
		</div>
	);
};

export default SortBar;

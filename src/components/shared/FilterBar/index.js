import React from 'react';

import Button from '../Button';
import styles from './style.module.css';

const FilterBar = () => {
	return (
		<div className={styles.filterBarContainer}>
			<div className={styles.label}>
				<span>Filter by: </span>
			</div>
			<div className={styles.filters}>
				<div className={styles.filterBtnsContainer}>
					<Button text='Liverpool' classes={styles.filterBtn} />
					<Button text='London' classes={styles.filterBtn} />
					<Button text='Manchester' classes={styles.filterBtn} />
				</div>
			</div>
		</div>
	);
};

export default FilterBar;

import React from 'react';

import Button from '../Button';
import styles from './style.module.css';

const FILTER_CITIES = [
	{ label: 'Liverpool', value: 'liverpool' },
	{ label: 'London', value: 'london' },
	{ label: 'Manchester', value: 'manchester' },
];

const FilterBar = ({ activeFilterBy, handleFilterBtnClick }) => {
	return (
		<div className={styles.filterBarContainer}>
			<div className={styles.label}>
				<span>Filter by: </span>
			</div>
			<div className={styles.filters}>
				<div className={styles.filterBtnsContainer}>
					{FILTER_CITIES.map((item, index) => {
						return (
							<Button
								key={index}
								text={item.label}
								classes={`${
									activeFilterBy === item.value
										? styles.filterBtn + ' ' + styles.filterBtnActive
										: styles.filterBtn
								}`}
								onClick={() => {
									handleFilterBtnClick(item.value);
								}}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default FilterBar;

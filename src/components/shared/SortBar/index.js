import React from 'react';

import Button from '../Button';
import styles from './style.module.css';

const SORT_BY = [
	{ label: 'Name', value: 'name' },
	{ label: 'City', value: 'city' },
];

const SortBar = ({ activeSortBy, handleSortBtnClick }) => {
	return (
		<div className={styles.sortBarContainer}>
			<div className={styles.label}>
				<span>Sort by: </span>
			</div>
			<div className={styles.sorts}>
				<div className={styles.sortBtnsContainer}>
					{SORT_BY.map((item, index) => (
						<Button
							text={item.label}
							classes={`${
								activeSortBy === item.value
									? styles.sortBtn + ' ' + styles.sortBtnActive
									: styles.sortBtn
							}`}
							key={index}
							onClick={() => {
								handleSortBtnClick(item.value);
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default SortBar;

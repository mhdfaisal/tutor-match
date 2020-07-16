import React from 'react';

import styles from './style.module.css';
import FilterBar from '../shared/FilterBar';

const TutorsSection = () => {
	return (
		<main className={styles.tutorsSection}>
			<section>
				<h2 className={styles.mainHeading}>Our Tutors</h2>
				<h4 className={styles.subHeading}>
					We have more than 100 tutors from various disciplines ready to match with you.
				</h4>
			</section>
			<section className={styles.filterSortFlex}>
				<div>
					<FilterBar />
				</div>
			</section>
		</main>
	);
};

export default TutorsSection;

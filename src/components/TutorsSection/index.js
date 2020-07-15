import React from 'react';

import styles from './style.module.css';

const TutorsSection = () => {
	return (
		<section className={styles.tutorsSection}>
			<article>
				<h2 className={styles.mainHeading}>Our Tutors</h2>
				<h4 className={styles.subHeading}>
					We have more than 100 tutors from various disciplines ready to match with you.
				</h4>
			</article>
		</section>
	);
};

export default TutorsSection;

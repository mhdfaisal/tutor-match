import React from 'react';

import styles from './style.module.css';
import Header from '../../components/shared/Header';
import Button from '../../components/shared/Button';

const Home = () => {
	return (
		<section className={styles.topSection}>
			<Header />
			<div className={styles.heroSection}>
				<h1 className={styles.heroHeading}>The place where Tutors and Students meet</h1>
				<h3 className={styles.subHeading}>
					Find out who can help you take your education to the next level.
				</h3>
				<div className={styles.heroBtnContainer}>
					<Button text='Get started now' classes={styles.getStartedBtn} />
				</div>
			</div>
		</section>
	);
};
export default Home;

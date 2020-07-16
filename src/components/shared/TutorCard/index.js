import React from 'react';

import Button from '../../shared/Button';
import styles from './style.module.css';
import UserPhoto from '../../../assets/images/user-photo.svg';
import StudentPhoto from '../StudentPhoto';

const TutorCard = ({ tutorDetails }) => {
	const { name, address } = tutorDetails;
	const { city } = address;
	return (
		<div className={styles.tutorCardContainer}>
			<div className={styles.tutorCardHeader}>
				<div className={styles.imgContainer}>
					<img src={UserPhoto} alt='avatar' />
				</div>
			</div>
			<div className={styles.tutorCardBody}>
				<div className={styles.tutorName}>{name}</div>
				<div className={styles.tutorDetails}>
					<div className={styles.cityLabel}>City</div>
					<Button text={city} classes={styles.cityBtn} />
				</div>
				<div className={styles.studentsSoFar}>
					<p className={styles.label}>Students so far</p>
					<div className={styles.studentsFlex}>
						<StudentPhoto />
						<StudentPhoto />
						<StudentPhoto />
						<StudentPhoto />
					</div>
				</div>
			</div>
		</div>
	);
};
export default TutorCard;

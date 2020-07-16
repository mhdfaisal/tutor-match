import React from 'react';

import styles from './style.module.css';
import Photo from './../../../assets/images/student-photo.svg';

const StudentPhoto = () => {
	return (
		<div className={styles.studentPhotoContainer}>
			<img src={Photo} alt='student' />
		</div>
	);
};
export default StudentPhoto;

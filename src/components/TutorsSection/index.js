import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

import styles from './style.module.css';
import FilterBar from '../shared/FilterBar';
import SortBar from '../shared/SortBar';
import TutorCard from '../shared/TutorCard';
import { TUTORS_API } from '../../utils/apiConstants';
import {
	FETCH_TUTORS_DATA_INIT,
	FETCH_TUTORS_DATA_SUCCESS,
	FETCH_TUTORS_DATA_FAILURE,
} from './types';
import { reducer } from './reducer';

const TutorsSection = () => {
	const [data, dispatch] = useReducer(reducer, {
		tutors: [],
		isLoading: false,
		success: null,
		sortBy: '',
		filterBy: '',
		errorMsg: '',
	});

	const fetchTutorsData = async () => {
		try {
			dispatch({ type: FETCH_TUTORS_DATA_INIT, payload: {} });
			const res = await axios.get(TUTORS_API);
			const data = res?.data ?? [];
			dispatch({ type: FETCH_TUTORS_DATA_SUCCESS, payload: { data: [...data] } });
		} catch (err) {
			dispatch({ type: FETCH_TUTORS_DATA_FAILURE, payload: {} });
		}
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			fetchTutorsData();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	const { tutors } = data;
	return (
		<main className={styles.tutorsSection}>
			<section>
				<h2 className={styles.mainHeading}>Our Tutors</h2>
				<h4 className={styles.subHeading}>
					We have more than 100 tutors from various disciplines ready to match with you.
				</h4>
			</section>
			<section className={styles.filterSortFlex}>
				<div className={styles.filterBarContainer}>
					<FilterBar />
				</div>
				<div className={styles.sortBarContainer}>
					<SortBar />
				</div>
			</section>
			<section className={styles.tutorsCardSection}>
				{tutors.map((item, index) => {
					return (
						<div
							key={index}
							className={`${
								(index + 1) % 4 === 0
									? styles.mb30
									: styles.mr40 + ' ' + styles.mb30
							}`}
						>
							<TutorCard tutorDetails={item} />
						</div>
					);
				})}
			</section>
		</main>
	);
};

export default TutorsSection;

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
	APPLY_FILTER,
	APPLY_SORT,
	SHOW_ALL_TUTORS,
} from './types';
import { reducer } from './reducer';
import Button from '../shared/Button';

const TutorsSection = () => {
	const [data, dispatch] = useReducer(reducer, {
		tutors: [],
		tutorsToShow: [],
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

	const applyFilter = (filterCity) => {
		dispatch({ type: APPLY_FILTER, payload: { filterCity } });
	};

	const applySort = (sortBy) => {
		dispatch({ type: APPLY_SORT, payload: { sortBy } });
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

	const { tutorsToShow, filterBy, tutors } = data;
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
					<FilterBar activeFilterBy={data?.filterBy} handleFilterBtnClick={applyFilter} />
				</div>
				<div className={styles.sortBarContainer}>
					<SortBar activeSortBy={data?.sortBy} handleSortBtnClick={applySort} />
				</div>
			</section>
			<section className={styles.tutorsCardSection}>
				{tutorsToShow.map((item, index) => {
					return (
						<div className={`${styles.mr40} ${styles.mb30}`} key={index}>
							<TutorCard tutorDetails={item} />
						</div>
					);
				})}
			</section>
			<section className={styles.seeMoreContainer}>
				{filterBy === '' && tutorsToShow.length < tutors.length && (
					<Button
						text='See all Tutors'
						classes={styles.seeMoreBtn}
						onClick={() => {
							dispatch({ type: SHOW_ALL_TUTORS });
						}}
					/>
				)}
			</section>
		</main>
	);
};

export default TutorsSection;

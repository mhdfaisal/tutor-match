import {
	FETCH_TUTORS_DATA_INIT,
	FETCH_TUTORS_DATA_SUCCESS,
	FETCH_TUTORS_DATA_FAILURE,
	APPLY_FILTER,
	APPLY_SORT,
	SHOW_ALL_TUTORS,
} from './types';

export const reducer = (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_TUTORS_DATA_INIT:
			return { ...state, isLoading: true, sortBy: '', filterBy: '', success: null };
		case FETCH_TUTORS_DATA_SUCCESS:
			const data = payload?.data ?? [];
			const tutorsToShow = data.length >= 8 ? data.slice(0, 8) : [...data];
			return {
				...state,
				tutors: [...(payload?.data ?? [])],
				tutorsToShow: [...tutorsToShow],
				isLoading: false,
				sortBy: '',
				filterBy: '',
				success: true,
			};
		case FETCH_TUTORS_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				sortBy: '',
				filterBy: '',
				success: false,
				errorMsg: 'Something went wrong!',
			};
		case APPLY_FILTER: {
			const filterCity = (payload?.filterCity ?? '').toLowerCase();
			const { tutors } = state;
			const filteredTutorsToShow = tutors.filter((item) => {
				return (item?.address?.city ?? '').toLowerCase() === filterCity;
			});
			return {
				...state,
				tutorsToShow: [...filteredTutorsToShow],
				filterBy: filterCity,
				sortBy: '',
			};
		}
		case APPLY_SORT: {
			const sortBy = (payload?.sortBy ?? '').toLowerCase();
			const { tutors, tutorsToShow } = state;
			const sortedTutorsToShow = tutors.sort((a, b) => {
				if (sortBy === 'city') {
					if (a.address[sortBy] > b.address[sortBy]) return 1;
					if (a.address[sortBy] < b.address[sortBy]) return -1;
					return 0;
				} else if (sortBy === 'name') {
					if (a[sortBy] > b[sortBy]) return 1;
					if (a[sortBy] < b[sortBy]) return -1;
					return 0;
				}
				return 0;
			});
			return {
				...state,
				sortBy,
				tutorsToShow: [
					...sortedTutorsToShow.slice(
						0,
						sortedTutorsToShow.length >= 8 && tutorsToShow.length <= 8
							? 8
							: sortedTutorsToShow.length
					),
				],
				tutors: [...sortedTutorsToShow],
				filterBy: '',
			};
		}
		case SHOW_ALL_TUTORS:
			const { tutors } = state;
			return { ...state, tutorsToShow: [...tutors] };
		default:
			return state;
	}
};

import {
	FETCH_TUTORS_DATA_INIT,
	FETCH_TUTORS_DATA_SUCCESS,
	FETCH_TUTORS_DATA_FAILURE,
} from './types';

export const reducer = (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_TUTORS_DATA_INIT:
			return { ...state, isLoading: true, sortBy: '', filterBy: '', success: null };
		case FETCH_TUTORS_DATA_SUCCESS:
			return {
				...state,
				tutors: [...(payload?.data ?? [])],
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
		default:
			return state;
	}
};

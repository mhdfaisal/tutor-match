import React from 'react';

import styles from './style.module.css';

const SignInBtn = (props) => {
	return (
		<button className={styles.signInBtn} {...props}>
			Sign In
		</button>
	);
};
export default SignInBtn;

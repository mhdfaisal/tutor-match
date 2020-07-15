import React from 'react';

import { Link } from 'react-router-dom';
import Button from '../../Button';

const NavLinks = (props) => {
	const { classes } = props;
	return (
		<>
			<li className={classes}>
				<Link to='/'>Become a tutor</Link>
			</li>
			<li className={classes}>
				<Button text='Sign In' />
			</li>
		</>
	);
};
export default NavLinks;

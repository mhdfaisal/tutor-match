import React from 'react';

import Logo from '../../../assets/images/Logo.svg';

const Navbar = () => {
	return (
		<nav>
			<div className='navbar-brand'>
				<div className='navbar-logo-container'>
					<img src={Logo} alt='brand' />
				</div>
			</div>
			<div className='navbar-links'></div>
		</nav>
	);
};
export default Navbar;

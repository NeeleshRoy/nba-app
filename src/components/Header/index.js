import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav';

const Header = (props) => {
	const logo = () => (
		<Link to="/" className={style.logo}>
			<img alt="nba logo" src="/images/nba_logo.png" />
		</Link>
	);

	const navBars = () => (
		<div className={style.bars}>
			<FontAwesome
				name="bars"
				onClick={props.onShowNav}
				style={{ color: '#dfdfdf', padding: '10px', cursor: 'pointer' }}
			/>
		</div>
	);

	return (
		<header className={style.header}>
			<SideNav {...props} />
			<div className={style.header__options}>
				{navBars()}
				{logo()}
			</div>
		</header>
	);
};

export default Header;

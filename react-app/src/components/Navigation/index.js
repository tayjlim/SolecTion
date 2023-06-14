import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul>
			<li>
				<NavLink exact to="/">
				<img className ='logoHeaderNav' src = 'https://cdn.discordapp.com/attachments/1117931108747722862/1118582479146733658/solection-low-resolution-logo-color-on-transparent-background.png'/>
				</NavLink>

				<NavLink exact to ='/sell'>
				sell here
				</NavLink>
			</li>
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</ul>
	);
}

export default Navigation;

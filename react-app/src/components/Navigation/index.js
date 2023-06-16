import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const history = useHistory()

	function onClick (e) {
		return history.push('/sell')
	}
	return (

		<div className = 'navigationBarDiv'>

				<NavLink exact to="/">
				<img className ='logoHeaderNav' src = 'https://cdn.discordapp.com/attachments/1117931108747722862/1118582479146733658/solection-low-resolution-logo-color-on-transparent-background.png'/>
				</NavLink>

				<input
				type='search'
				placeholder = 'Search for brand... color...etc'
				className = 'searchNav'
				/>

			<div className = 'sellLoginSignUp'>
				{(sessionUser) ?
				<button onClick = {onClick}>Sell Here</button>
				:
				null
				}
				{(!sessionUser) ?
				<div className = 'loginSignupDiv'>
				<button>Sign Up</button>
				<button>Log In</button>
				</div> : null
				}
			{isLoaded && (

					<ProfileButton user={sessionUser} />

			)}
			</div>
		</div>

	);
}

export default Navigation;

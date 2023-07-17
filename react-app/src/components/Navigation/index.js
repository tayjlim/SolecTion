
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import SignupFormPage from "../SignupFormPage";
import SearchBar from "../SearchBar";
import './Navigation.css';
import { logout } from "../../store/session";

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const history = useHistory()
	const ulRef = useRef();
	const dispatch = useDispatch();
	//console.log(sessionUser,'-------------------')
	const [showMenu, setShowMenu] = useState(false);
	const [search, setSearchValue] = useState('')
	const openMenu = () => {
		if (showMenu) return;
		setShowMenu(true);
	  };

	  useEffect(() => {
		if (!showMenu) return;

		const closeMenu = (e) => {
		  if (!ulRef.current.contains(e.target)) {
			setShowMenu(false);
		  }
		};

		document.addEventListener("click", closeMenu);

		return () => document.removeEventListener("click", closeMenu);
	  }, [showMenu]);

	  const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
	  };


	function onClick (e) {
		return history.push('/sell')
	}

	const closeMenu = () => setShowMenu(false);
	return (

		<div className = 'navigationBarDiv'>

				<NavLink exact to="/">
				<img className ='logoHeaderNav' src = 'https://cdn.discordapp.com/attachments/1117931108747722862/1118582479146733658/solection-low-resolution-logo-color-on-transparent-background.png'/>
				</NavLink>

				<SearchBar></SearchBar>

			<div className = 'sellLoginSignUp'>
				{(sessionUser && isLoaded) ?
				<div className = 'SellhereAndUserButton'>
				<button onClick ={(e)=>history.push('/myCart')}id = 'navCartButton' className = 'allButton'> My Cart</button>
				<button id = 'navButtonSell' className = 'allButton' onClick = {onClick}>Sell Here</button>
				<ProfileButton  user={sessionUser} />
				</div>

				:
				null
				}
				{(!sessionUser) ?
				<div className = 'loginSignupDiv'>
				<OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
			  id ='navButtonLogin'
              modalComponent={<LoginFormModal />}
            />

           <OpenModalButton
					buttonText = 'SignUp'
					onItemClick={closeMenu}
					id = 'navButtonSignUp'
					modalComponent={<SignupFormModal />}
			/>


				</div> : null
				}

			</div>
		</div>

	);
}

export default Navigation;

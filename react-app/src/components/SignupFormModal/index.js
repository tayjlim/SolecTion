import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password));

			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		}

		else {
			setErrors([
				"Passwords must match!",
			]);
		}
	};

	return (
		<>
			<h1>Sign Up</h1>

			<form onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li
						className="pErrors" key={idx}>{error}</li>
					))}
				</ul>

				<div className = 'form-row'>
				<input
					className = 'loginInput'
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<span className = {(email.length > 0) ? 'staySmall' : 'fieldportion'}>
				Email Address
				</span>
				</div>

				<div className = 'form-row'>
				<input
					className = 'loginInput'
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<span className = {(username.length > 0) ? 'staySmall' : 'fieldportion'}>
				Username
				</span>
				</div>

				<div className = 'form-row'>

				<input
					className = 'loginInput'
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<span className = {(password.length>0) ? 'staySmall' : 'fieldportion'}>
				Password
				</span>

				</div>

				<div className = 'form-row'>

				<input
					className = 'loginInput'
					type="password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>

				<span className = {(confirmPassword.length>0) ? 'staySmall' : 'fieldportion'}>
				Confirm Password
				</span>

				</div>



				<button className = 'allButton' type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default SignupFormModal;

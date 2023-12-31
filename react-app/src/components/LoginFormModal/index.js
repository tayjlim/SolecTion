import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login("demo@aa.io", "password"))
      .then(closeModal)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  return (
    <>
    <div className = 'LoginModalClass'>
      <h1 className = 'logInHeader'>Log In </h1>

      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li className="pErrors" key={idx}>{error}</li>
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <span className = {(password.length>0) ? 'staySmall' : 'fieldportion'}>
          Password
          </span>

          </div>

        <button  className = 'allButton' type="submit">Log In</button>

      </form>

      <button  className = 'allButton' type="submit"
         onClick={handleDemoSubmit}>Demo User Login
      </button>

      </div>
    </>
  );
}

export default LoginFormModal;

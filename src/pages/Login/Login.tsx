import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Buttons/Button';
import { joinClasses } from '../../utils/joinClasses';
import './login.css';
import { useAppDispatch } from '../../hooks/hooks';
import { signIn } from '../../store/apiReducer/api/api';
import { MAIN } from '../../constants/pathes/navPathes';

export const Login = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <Button
        cls={['main-button']}
        text="Main page"
        title="Back main"
        func={() => {
          navigate(`/${MAIN}`);
        }}
      />
      <div className="login-page">
        <h2>Login</h2>
        <form action="#/" className="login-page__form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            className={joinClasses(['login-page__input'])}
            type="text"
            onInput={(e: any) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <p className="error-notice">Incorrect login</p>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            className={joinClasses(['login-page__input'])}
            type="text"
            onInput={(e: any) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <p className="error-notice">Incorrect password</p>
          <Button
            func={() => {
              dispatch(signIn({ email, password }));
              setEmail('');
              setPassword('');
              navigate(`/${MAIN}`);
            }}
            cls={['submit-button']}
            title="Submit"
            text="login"
          />
        </form>
      </div>
    </>
  );
};

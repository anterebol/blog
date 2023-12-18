import { Button } from '../../components/Buttons/Button';
import { joinClasses } from '../../utils/joinClasses';
import './login.css';

export const Login = () => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form action="#/" className="login-page__form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className={joinClasses(['login-page__input'])}
          type="text"
          placeholder="Email"
        />
        <p className="error-notice">Incorrect login</p>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className={joinClasses(['login-page__input'])}
          type="text"
          placeholder="Password"
        />
        <p className="error-notice">Incorrect password</p>
        <Button
          func={() => {}}
          cls={['submit-button']}
          title="Submit"
          text="login"
        />
      </form>
    </div>
  );
};

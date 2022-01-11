import { useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { signInUser, signUpUser } from '../../services/users';
import './Auth.css';
import classNames from 'classnames';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [type, setType] = useState('signin');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response =
        type === 'signin' ? await signInUser(email, password) : await signUpUser(email, password);
      setCurrentUser(response);
    } catch {
      setMessage('Something went wrong, try again!');
    }
  };
  return (
    <div>
      <div className="top">
        <h3 onClick={() => setType('signin')} className={classNames({ active: type === 'signin' })}>
          Sign In
        </h3>
        <h3 onClick={() => setType('signup')} className={classNames({ active: type === 'signup' })}>
          Sign Up
        </h3>
      </div>
      <AuthForm
        message={message}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

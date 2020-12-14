import React, { useState, useContext } from 'react';
import axios from 'axios';
import { LoadingSpinner, LoginError, AuthContext } from '../componentExports';

const SignInForm = () => {
  const { handleLogin } = useContext(AuthContext);
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChangeForField = (fieldName) => ({ target }) =>
    setInputs((state) => ({ ...state, [fieldName]: target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    await axios
      .post('https://travel-blogs-api.herokuapp.com/users/login', {
        email: inputs.email,
        password: inputs.password
      })
      .then(
        (response) => {
          const { token } = response.data;
          handleLogin(token);
        },
        (err) => {
          console.error(err);
          setInputs({});
          setError('Invalid login.');
        }
      );
    setLoading(false);
  };

  const handleRemoveErrorButton = () => {
    setError(false);
  };

  return (
    <>
      {loading || error ? (
        loading ? (
          <div className='m-8'>
            <LoadingSpinner />
          </div>
        ) : (
          <div className='my-6'>
            <LoginError
              error={error}
              buttonText='Go back'
              onClick={handleRemoveErrorButton}
            />
          </div>
        )
      ) : (
        <form className='mx-2 my-2' onSubmit={handleSubmit}>
          <input
            className='login-input'
            key='email'
            type='text'
            placeholder='Email'
            name='email'
            onChange={onChangeForField('email')}
            value={inputs.email}
          />
          <input
            className='login-input'
            key='password'
            type='password'
            placeholder='Password'
            name='password'
            onChange={onChangeForField('password')}
            value={inputs.password}
          />
          <button className='cta-button float-right mb-3'>Login</button>
        </form>
      )}
    </>
  );
};

export default SignInForm;

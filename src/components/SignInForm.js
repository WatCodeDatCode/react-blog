import React, { useState, useContext } from 'react'
import axios from 'axios'
import AuthContext from './AuthContext'

const SignInForm = () => {
    const {handleLogin} = useContext(AuthContext)
    const [inputs, setInputs] = useState({})
    const onChangeForField = (fieldName) => ({ target }) =>
        setInputs((state) => ({ ...state, [fieldName]: target.value }))

    const handleSubmit = async (event) => {
        event.preventDefault()
        await axios
            .post('https://travel-blogs-api.herokuapp.com/users/login', {
                email: inputs.email,
                password: inputs.password,
            })
            .then(
                (response) => {
                    const data = response.data
                    console.log(data)
                    const { token } = response.data
                    console.log(token)
                    handleLogin(token)
                },
                (err) => {
                    console.error(err)
                    alert('Login invalid!')
                    setInputs({})
                }
            )
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="form-input"
                key="email"
                type="text"
                placeholder="Email"
                name="email"
                onChange={onChangeForField('email')}
                value={inputs.email}
            />
            <input
                className="form-input"
                key="password"
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChangeForField('password')}
                value={inputs.password}
            />
            <button>Login</button>
        </form>
    )
}

export default SignInForm

import React, { Component } from 'react';
import './login.css'

class Login extends Component {
    render() { 
        return (
            <div className='addUser'>
                <h3>Sign in</h3>
                <form className='addUserForm'>
                    <div className='inputGroup'>
                        <label htmlFor='name'>Name:</label>
                            <input
                            type='text'
                            id='name'
                            autoComplete='off'
                            placeholder='Enter your email'
                            />
                        <label htmlFor='email'>Email:</label>
                            <input
                            type='email'
                            id='email'
                            autoComplete='off'
                            placeholder='Enter Your Name'
                            />
                        <label htmlFor='password'>Password:</label>
                            <input
                            type='password'
                            id='password'
                            autoComplete='off'
                            placeholder='Enter password'
                            />
                        <button type="submit" className="btn btn-success">Sign Up</button>
                    </div>
                </form>
                <div className='login'>
                    <p>Already have an account?</p>
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </div>
        );
    }
}
 
export default Login;

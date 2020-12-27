import React from 'react'
import './TextFieldSI.css'

const TextFieldSI = (props) => {
    return (
        <div>
           
            <div className='email'>
            <label htmlFor="email">Email</label>
            <input type='email' name='email' onChange={props.changed} noValidate />
            {props.errors.email.length > 0 && 
                <span className='error'>{props.errors.email}</span>}
            </div>
           
          
            <div className='password'>
            <label htmlFor="password">Password</label>
            <input type='password' name='password' onChange={props.changed} noValidate />
            {props.errors.password.length > 0 && 
                <span className='error'>{props.errors.password}</span>}
            </div>
          
        </div>
    )
}

export default TextFieldSI




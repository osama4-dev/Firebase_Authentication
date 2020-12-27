import React from 'react'
import './Textfield.css'

const Textfield = (props) => {
    return (
        <div>
            <div className='fullName'>
            <label htmlFor="fullName">Full Name</label>
            <input type='text' name='fullName' onChange={props.changed} noValidate />
            {props.errors.fullName.length > 0 && 
                <span className='error'>{props.errors.fullName}</span>}
            </div>
            <div className='email'>
            <label htmlFor="email">Email</label>
            <input type='email' name='email' onChange={props.changed} noValidate />
            {props.errors.email.length > 0 && 
                <span className='error'>{props.errors.email}</span>}
            </div>
            <div className='phoneNumber'>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type='phoneNumber' name='phoneNumber' onChange={props.changed} noValidate />
            {props.errors.phoneNumber.length > 0 && 
                <span className='error'>{props.errors.phoneNumber}</span>}
            </div>
            <div className='gender'>
            <label htmlFor="gender">Gender</label>
            Male
            <input type='radio' name='gender' onChange={props.changed} noValidate />
            Female
            <input type='radio' name='gender' onChange={props.changed} noValidate/>
            
            {props.errors.gender.length > 0 && 
                <span className='error'>{props.errors.gender}</span>}
            </div>
            <div className='password'>
            <label htmlFor="password">Password</label>
            <input type='password' name='password' onChange={props.changed} noValidate />
            {props.errors.password.length > 0 && 
                <span className='error'>{props.errors.password}</span>}
            </div>
            <div className='password'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type='confirmPassword' name='confirmPassword' onChange={props.changed} noValidate />
            {props.errors.password.length > 0 && 
                <span className='error'>{props.errors.confirmPassword}</span>}
            </div>
        </div>
    )
}

export default Textfield




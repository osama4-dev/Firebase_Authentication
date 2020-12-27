import React, { Component } from 'react'
import './SignIn.css'
import TextFieldSI from '../Textfield/TextFieldSI/TextFieldSI'
import Button from '../Button/Button'




const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}



export class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email:null,
            password:null,
            errors:{
                email:'',
                
                password:'',
               
            }
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        const {name,value,password} = e.target;
        let errors=this.state.errors;
        

        switch(name){
           
                case 'email':
                    errors.email=
                    validEmailRegex.test(value)
                    ?''
                    :'Email is not valid';
                    break;
                   
                  
                    case'password':
                    errors.password=
                    value.length < 8 
                    ? 'Password must be 8 characters long!'
                    :'';
                    break;
                   
                    default:
                        break;


        }
        this.setState({errors,[name]:value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        }else{
          console.error('Invalid Form')
        }
      }

    render() {
        return (
            <>
            <div className='wrapper'>
                <h2>Sign In</h2>
                
                <form onSubmit={this.handleSubmit} noValidate>
                  <TextFieldSI errors={this.state.errors} changed={this.handleChange} />
                  <Button onClick={this.signin} text="Sign In" />
                </form>
                
          </div>  
          </>
        )
    }
}

export default SignIn

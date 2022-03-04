import { useState, useEffect } from 'react';
import {Button, Modal} from 'react-materialize';

const Signup = ({signupUser, signupAuthError, clearAuthError, modalOpen }) => {

  const [signupName, setSignupName] = useState('')
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (signupAuthError !== '') { 
      setErrorMessage(signupAuthError) }
  })

  
  const handleChange = (event) => {
    switch (event.target.id) 
    {
      case 'signup-name': setSignupName(event.target.value); break;
      case 'signup-email': setSignupEmail(event.target.value); break;
      case 'signup-password': setSignupPassword(event.target.value); break;
      case 'signup-password-confirm': setSignupPasswordConfirm(event.target.value); break;
      default: console.log('event target not found')
    }
  }

  const handleSignup = () => {
    if (signupName && signupEmail && signupPassword && signupPasswordConfirm) {   // if user fills out all fields
      if (signupPassword === signupPasswordConfirm) {
        signupUser(signupName, signupEmail, signupPassword);
      }
      else {
        setErrorMessage('Please make sure the password fields match')
      }
    }
    else {
      setErrorMessage('Please fill out all form fields')
    }
  }

  const clearForm = () => {
    clearAuthError('signup')
    document.getElementById('signup-name').value=''
    document.getElementById('signup-email').value=''
    document.getElementById('signup-password').value=''
    document.getElementById('signup-password-confirm').value=''
  }

  return (
      <>
        <Modal
            actions={[
              <Button flat node="button" waves="green" onClick={handleSignup}>Signup</Button>,
              <Button flat modal="close" node="button" waves="green">Close</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Sign Up"
            id="modal-signup"
            open={modalOpen}
            options={{
              dismissible: true,
              onCloseEnd: clearForm,
              endingTop: '10%',
              inDuration: 250,
              opacity: 0.5,
              outDuration: 250,
              preventScrolling: true,
              startingTop: '4%'
            }}
            trigger={<p node="button" className='auth-link' id='signup-link'>Signup</p>}
          >
           <input type='text' name='signup-name' id='signup-name' placeholder='Name 'onChange={(event) => handleChange(event)}></input>
           <input type='email' name='signup-email' id='signup-email' placeholder='Email' onChange={(event) => handleChange(event)}></input>
           <input type='password' name='signup-password' id='signup-password' placeholder='Password' onChange={(event) => handleChange(event)}></input>
           <input type='password' name='signup-password-confirm' id='signup-password-confirm' placeholder='Confirm Password' onChange={(event) => handleChange(event)}></input>
           <p id='signup-error-message' className='error-message'>{errorMessage}</p>
          </Modal>
      </>
  )
};

export default Signup;

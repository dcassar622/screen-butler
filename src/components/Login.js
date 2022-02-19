import { useEffect, useState } from 'react';
import {Button, Modal} from 'react-materialize';

const Login = ({loginUser, loginAuthError, clearAuthError}) => {

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(loginAuthError);

  useEffect(() => {
    if (loginAuthError !== '') { setErrorMessage(loginAuthError) }
  })

  const handleChangeEmail = (event) => {
    setErrorMessage('')
    setLoginEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setErrorMessage('')
    setLoginPassword(event.target.value)
  }

  // if both fields are filled, handle login request
  const handleLogin = () => {
    loginEmail && loginPassword ? loginUser(loginEmail, loginPassword) : setErrorMessage(`Please fill out all fields`)
  }

  const clearForm = () => {
    clearAuthError('login')
    document.getElementById('login-email').value=''
    document.getElementById('login-password').value=''
  }


  return (
      <>
          <Modal
            actions={[
              <Button flat node="button" waves="green" onClick={handleLogin}>Login</Button>,
              <Button flat modal="close" node="button" waves="green">Close</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Login"
            id="login-modal"
            open={false}
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
            trigger={<Button node="button">Login</Button>}
          >
            <input type='email' name='login-email' id='login-email' 
                   placeholder='Email' onChange={(event) => handleChangeEmail(event)} />
            <input type='password' name='login-password' id='login-password' 
                   placeholder='Password' onChange={(event) => handleChangePassword(event)} />
            <p id='login-error-message' className='error-message'>{errorMessage}</p>
          </Modal>
      </>
  )
};

export default Login;

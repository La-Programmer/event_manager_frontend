import AuthPage from './Pages/AuthPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailVerification from './components/EmailVerification';
import forgotPasswordBanner from './assets/forgotpassword-banner.jpg';
import HomePage from './Pages/HomePage';
import loginBanner from './assets/login-banner.jpg'
import ResetPassword from './components/ResetPassword';
import signupBanner from './assets/signup-banner.jpg' 
import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState('signup');
  const [authImage, setAuthImage] = useState(signupBanner)

  const gotoLogin = () => {
    setAuth('login');
    setAuthImage(loginBanner);
  }

  const gotoSignup = () => {
    setAuth('signup');
    setAuthImage(signupBanner);
  }

  const gotoForgotPassword = () => {
    setAuth('forgot-password');
    setAuthImage(forgotPasswordBanner);
  }

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage gotoLogin={gotoLogin} gotoSignup={gotoSignup} />}></Route>
      <Route path='/auth' element={
        <AuthPage
          auth={auth}
          authImage={authImage}
          gotoLogin={gotoLogin}
          gotoSignup={gotoSignup}
          gotoForgotPassword={gotoForgotPassword}/>
        }></Route>
      <Route path='/reset-password' element={<ResetPassword gotoLogin={gotoLogin}/>}></Route>
      <Route path='/verify-email' element={<EmailVerification gotoLogin={gotoLogin}/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

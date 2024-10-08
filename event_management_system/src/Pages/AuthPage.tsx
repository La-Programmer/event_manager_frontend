import ForgotPassword from '../components/ForgotPassword';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import logo from "../assets/event-logo.svg";
import SignupForm from '../components/SignupForm';


interface AuthPageProps{
  auth: string
  authImage: string
  gotoLogin: () => void
  gotoSignup: () => void
  gotoForgotPassword: () => void
}

const AuthPage = ({ auth, authImage, gotoLogin, gotoSignup, gotoForgotPassword }: AuthPageProps) => {
  return (
    <>
      <div className="p-4">
        <div className="flex">
          <div className="w-1/2 relative">
            <Link to='/'>
              <img src={logo} alt="logo" className="absolute ml-10 mt-10" />
            </Link>
            {auth === 'signup' ? <SignupForm gotoLogin={gotoLogin}/> : auth === 'login' ? <LoginForm gotoForgotPassword={gotoForgotPassword} gotoSignup={gotoSignup}/> : auth === 'forgot-password' ? <ForgotPassword gotoLogin={gotoLogin}/> : <SignupForm gotoLogin={gotoLogin}/>}
          </div>
          <div className="w-1/2">
            <img src={authImage} alt="banner"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthPage
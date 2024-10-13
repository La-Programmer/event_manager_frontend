import GoogleAuthIcon from "./icons/GoogleAuthIcon";
import { Link } from "react-router-dom";

interface LoginFormProps{
  gotoSignup: () => void
  gotoForgotPassword: () => void
}

const LoginForm = ({ gotoSignup, gotoForgotPassword }: LoginFormProps) => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm font-haylard">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-center font-semibold text-gray-600">
            Please enter your details
          </p>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-4 font-poppins">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-3xl border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="text-sm">
                  <Link to="/auth" onClick={gotoForgotPassword} className="font-semibold text-green-600 hover:text-green-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-3xl border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={gotoSignup}
                className="flex w-full justify-center rounded-xl bg-black px-3 py-3 text-sm leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              >
                Sign in
              </button>
            </div>
            <div>
              <button className="mt-4 flex font-poppins w-full justify-center p-3 border border-gray-300 rounded-3xl hover:bg-gray-100">
                <GoogleAuthIcon/> <p className="mx-2">Signup with Google</p>
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?
            <button onClick={gotoSignup} className="font-bold ml-2 leading-6 text-green-600 hover:text-green-500">
              Create an account
            </button>
          </p>
        </div>
      </div>    
    </>
  )
}

export default LoginForm
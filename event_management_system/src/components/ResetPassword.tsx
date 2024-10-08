import BackIcon from "./icons/BackIcon";
import { Link } from "react-router-dom";

interface ResetPasswordProps{
  gotoLogin: () => void
}

const ResetPassword = ({ gotoLogin }: ResetPasswordProps) => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm font-haylard">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset Password
          </h2>
          <p className="mt-2 text-center font-semibold text-gray-600">
            Type in a new password
          </p>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-4 font-poppins">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="password"
                  className="block w-full rounded-3xl border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="password"
                  className="block w-full rounded-3xl border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-xl bg-black px-3 py-3 text-sm leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              >
                Reset Password
              </button>
            </div>
          </form>
          <div className="mt-10 w-full text-lg text-gray-500">
            <Link to='/auth' onClick={gotoLogin} className="leading-6 flex font-semibold items-center justify-center">
              <BackIcon/> <span className="text-green-600 mx-2">Back to Login</span>
            </Link>
          </div>
        </div>
      </div>  
    </>
  )
}

export default ResetPassword
import BackIcon from "./icons/BackIcon";
import { Link } from "react-router-dom";

interface EmailVerificationProps{
  gotoLogin: () => void
}

const EmailVerification = ({ gotoLogin }: EmailVerificationProps) => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm font-haylard">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Enter OTP
          </h2>
          <p className="mt-2 text-center font-semibold text-gray-600">
            An OTP has been sent to your email
          </p>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-4 font-poppins">
            <div className="flex justify-center items-center">
              <div className="mt-2">
                <input
                  id="pin1"
                  name="pin1"
                  type="pin1"
                  required
                  className="block w-2/3 rounded-xl border-0 px-3 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  id="pin2"
                  name="pin2"
                  type="pin2"
                  required
                  className="block w-2/3 rounded-xl border-0 px-3 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  id="pin3"
                  name="pin3"
                  type="pin3"
                  required
                  className="block w-2/3 rounded-xl border-0 px-3 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  id="pin4"
                  name="pin4"
                  type="pin4"
                  required
                  className="block w-2/3 rounded-xl border-0 px-3 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  id="pin5"
                  name="pin5"
                  type="pin5"
                  required
                  className="block w-2/3 rounded-xl border-0 px-3 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  id="pin6"
                  name="pin6"
                  type="pin6"
                  required
                  className="block w-2/3 rounded-xl border-0 px-3 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
              type="submit"
              className="flex w-full justify-center rounded-xl bg-black px-3 py-3 text-sm leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              >
                Verify Email
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

export default EmailVerification
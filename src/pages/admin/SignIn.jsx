import { Link } from "react-router-dom";
import {FaFacebookF, FaLinkedinIn, FaGoogle, FaRegUser} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function SignIn() {
  return (
    <>
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen">{/* min-h-screen */}
    <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        {/* Sign-In Link Saction */}
        <div className="w-3/5 p-5">
          {/* Company Name Section */}
          <div className="text-left font-bold mb-8">
            <Link to="/">
             <span className="text-green-500">Company </span> Name
            </Link>
          </div>
          {/* Form Name Section */}
          <div className="py-2">
            <h2 className="text-3xl font-bold text-green-500 mb-2">Sign In to Acount</h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
          </div>
          {/* Social Login Section */}
          <div className="flex justify-center my-2">
            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
              <FaFacebookF className="text-sm" />
            </a>
            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
              <FaLinkedinIn className="text-sm" />
            </a>
            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
              <FaGoogle className="text-sm" />
            </a>
          </div>

          <p className="text-gray-400 my-2">or use your login acount</p>

          <div className="flex flex-col items-center">

            <div className="bg-gray-100 w-72 p-2 flex items-center mb-3">
              <FaRegUser className="text-gray-400 m-1"/>
              <input type="text" name="username" id="username" autoComplete="off" placeholder="Username/Email" className="bg-gray-100 outline-none text-sm flex-1" />
            </div>

            <div className="bg-gray-100 w-72 p-2 flex items-center mb-3">
              <MdLockOutline className="text-gray-400 m-1"/>
              <input type="password" name="usrps" id="usrps" autoComplete="off" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
            </div>

            <div className="flex justify-between w-72 mb-5">
              <label className="flex items-center text-xs">
                <input type="checkbox" name="remember" className="mr-1" /> Remember Me
              </label>

              <a href="#" className="text-xs">Forgot Password</a>
            </div>

            <button type="button" className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">Submit</button>

          </div>
        </div>
        {/* Sing-Up Link Section */}
        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Hello, Friend</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">Fill up personal information and start journey with us.</p>
          <Link to="/sign-up" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">Sign Up</Link>
        </div>
      </div>
    </div>
    </>
  )
}

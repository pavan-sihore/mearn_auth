import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegUser } from "react-icons/fa";
import { MdLockOutline, MdRefresh } from "react-icons/md";
import { useFormik } from 'formik';
import { SignInSchema } from "./schema";

export default function SignIn() {

    const sighnInInitialValues = {
      username: "",
      usrps: "",
      captcha_code: "",
      remember_me: false,
    };

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
      validationSchema: SignInSchema,
      initialValues: sighnInInitialValues,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log(values);
        //alert(JSON.stringify(values, null, 2));
        action.resetForm();
      },
    });

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center min-h-screen bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-100 to-90% relative">

        <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl">
          {/* Sign-In Link Section */}
          <div className="flex-1 p-5">
            {/* Company Name Section */}
            <div className="text-left font-bold mb-5">
              <Link to="/">
                <span className="text-green-500">Company </span> Name
              </Link>
            </div>
            {/* Form Name Section */}
            <div className="py-1">
              <h2 className="text-2xl md:text-2xl font-bold text-green-500 mb-1">Sign In to Account</h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            </div>
            
            <div className="flex flex-col items-center">

              <div className="w-full max-w-xs">
              {/* Form start here */}
              <form onSubmit={handleSubmit}>

                <div className="flex items-start mb-1">
                  <label htmlFor="Username">Username/Email: <span className="text-red-500">*</span></label>
                </div>

                <div className="bg-transparent p-2 flex items-center mb-3 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500">
                  <FaRegUser className="text-gray-400 m-1" />
                  <input type="text" name="username" id="username" autoComplete="off" placeholder="Username/Email" className="bg-transparent outline-none text-sm flex-1" onChange={handleChange} onBlur={handleBlur} value={values.username} />
                </div>
                {errors.username && touched.username ? (<span className="flex items-start text-xs text-red-600 mb-1">{errors.username}</span>) : null}

                <div className="flex items-start mb-1">
                  <label htmlFor="usrps">Password: <span className="text-red-500">*</span></label>
                </div>

                <div className="bg-transparent p-2 flex items-center mb-3 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500">
                  <MdLockOutline className="text-gray-400 m-1" />
                  <input type="password" name="usrps" id="usrps" autoComplete="off" placeholder="Password" className="bg-transparent outline-none text-sm flex-1" onChange={handleChange} onBlur={handleBlur} value={values.usrps} />
                </div>
                {errors.usrps && touched.usrps ? (<span className="flex items-start text-xs text-red-600 mb-1">{errors.usrps}</span>) : null}

                <div className="bg-gray-100 flex flex-row items-center mb-3 border-2 border-gray-300 relative">
                  <img src="images/sample_captcha.jpg" alt="captcha" className="border-2 border-red-300" width={130} />
                  <MdRefresh className="absolute inset-y-0 right-0 w-16 h-9 cursor-pointer" />
                </div>

                <div className="bg-transparent p-2 flex items-center mb-3 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500">
                  <input type="text" name="captcha_code" id="captcha_code" autoComplete="off" placeholder="Enter captcha code here" className="outline-none text-sm flex-1" onChange={handleChange} onBlur={handleBlur} value={values.captcha_code} />
                </div>
                {errors.captcha_code && touched.captcha_code ? (<span className="flex items-start text-xs text-red-600 mb-1">{errors.captcha_code}</span>) : null}

                <div className="flex justify-between mb-5">
                  <label htmlFor="remember_me" className="flex items-center text-xs hover:text-green-600">
                    <input type="checkbox" name="remember_me" className="mr-1" onChange={handleChange} value={values.remember_me} /> Remember Me
                  </label>
                  <a href="#" className="text-xs hover:text-blue-600">Forgot Password</a>
                </div>
                {errors.remember_me && touched.remember_me ? (<span className="flex items-start text-xs text-red-600 mb-1">{errors.remember_me}</span>) : null}

                <button type="submit" className="border-2 border-green-500 text-green-500 rounded-full px-8 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">Submit</button>

              </form>
              {/* Form end here */}
              </div>

            </div>
          </div>

          {/* Sign-Up Link Section */}
          <div className="w-full md:w-2/5 bg-green-500 text-white md:rounded-tr-2xl md:rounded-bl-none rounded-bl-2xl rounded-br-2xl py-20 md:py-36 px-8 md:px-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Social Login</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>

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
            <p className="text-white my-2">or</p>
            <p className="mb-10">{"Don't have an acount?"}</p>
            <Link to="/sign-up" className="border-2 border-white rounded-full px-8 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">Sign Up</Link>
          </div>
        </div>

          {/* Footer saction */}
          <div className="md:fixed bottom-0 left-0 right-0 py-3 md:py-0">
            <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 opacity-75 w-full">
              <div className="text-gray-700 text-center sm:text-left pb-5 md:pb-0">Copyright © 2024. All Rights Reserved</div>
              <div className="text-gray-700 text-center sm:text-right">Designed & developed by Pavan Sihore</div>
            </div>
          </div>

      </div>

    </>
  )
}

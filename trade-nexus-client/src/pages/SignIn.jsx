import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Social from "../components/shared/Social";
import useAuth from "../hooks/useAuth";

const SignIn = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  signIn(email, password)
    .then((result) => {
      const signInInfo = {
        email,
        lastSignInTime: result.user?.metadata?.lastSignInTime,
      };

      // PATCH to update user's last sign-in time in the database
      fetch('https://plant-care-server-navy.vercel.app/users', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Updated user info:', data);
        });

      Swal.fire({
        title: 'Login Successful',
        icon: 'success',
      });

      navigate(from, { replace: true });
    })
    .catch((error) => {
      Swal.fire({
        title: `Login failed: ${error.code}`,
        icon: 'error',
      });
    });
};



  return (
    <>
    <Helmet>
                <title>
                    Sign In - Trade Nexus
                </title>
            </Helmet>
    <div className="flex justify-center items-center min-h-screen bg-base-200 px-4 rounded-3xl">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-300 rounded-xl shadow-2xl">
        <h2 className="text-center text-3xl font-bold text-white">
          Signin to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md btn btn-primary py-2 font-semibold   transition"
          >
            Sign In
          </button>
        </form>

        <Social from={from}></Social>

        

        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-green-400 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default SignIn;
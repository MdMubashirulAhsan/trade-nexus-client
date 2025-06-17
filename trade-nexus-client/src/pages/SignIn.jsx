import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Social from "../components/shared/Social";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import login from "../assets/lotties/login.json";
import Lottie from "lottie-react";

const SignIn = () => {
  const { signInUser } = useAuth();
const location = useLocation();
const navigate = useNavigate();
const from = location.state?.from?.pathname || "/";

const handleLogin = async (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  try {
    const result = await signInUser(email, password);

    const signInInfo = {
      email,
      lastSignInTime: result.user?.metadata?.lastSignInTime,
    };

    await axios.patch(`${import.meta.env.VITE_API_URL}/users`, signInInfo);

    Swal.fire({
      title: "Sign in Successful",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });

    navigate(from, { replace: true });
  } catch (error) {
    Swal.fire({
      title: "Login failed",
      text: error.message || error.code,
      icon: "error",
    });
  }
};


  return (
    <>
      <Helmet>
        <title>Sign In - Trade Nexus</title>
      </Helmet>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Lottie
            animationData={login}
            loop
            autoplay
            className="w-[40vw] mx-auto h-[40vh]"
          />
          <div className="card bg-base-200 w-full max-w-sm border-2 border-accent shrink-0 shadow-2xl text-base-content">
            <div className="card-body">
              <h2 className="text-primary text-3xl font-bold text-center mb-[7vh]">
                Sign In
              </h2>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="label font-semibold mb-2 block"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="label font-semibold mb-2 block"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full py-3 text-lg font-semibold disabled:opacity-60"
                >
                  Sign In
                </button>
              </form>

              <Social from={from}></Social>

              <p className="text-center text-sm text-base-content">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-accent hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default SignIn;

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import register from '../assets/lotties/register.json'

const Register = () => {
  const { createUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [form, setForm] = useState({
    displayName: "",
    email: "",
    password: "",
    photoURL: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    return hasUpper && hasLower && password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const formData = new FormData(form);

    const user = Object.fromEntries(formData.entries());

    if (!validatePassword(user.password)) {
      setError(
        "Password must be at least 6 characters and include uppercase and lowercase letters."
      );
      return;
    }

    try {
      await createUser(user.email, user.password).then((result) => {
        
        updateProfile(result.user, {
          displayName: user.displayName,
          photoURL: user.photoURL,
        });

        navigate(from, { replace: true });
      });
    } catch (err) {
      setError(err.message);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.message,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title> Register - Trade Nexus</title>
      </Helmet>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
        <Lottie
          animationData={register}
          loop
          autoplay
          className="w-[40vw] mx-auto h-[40vh]"
        />
      </div>
    <div className="card bg-base-200 w-full max-w-sm shrink-0 border-2 border-accent shadow-2xl text-base-content">
      <div className="card-body">
        <h2 className="text-primary text-3xl font-bold text-center mb-[7vh]">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="displayName"
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="photoURL"
            type="url"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            value={form.photoURL}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={form.password}
            onChange={handleChange}
            required
          />
          {error && <p className="text-danger text-sm">{error}</p>}
          <button
            className="btn btn-primary w-full py-3 text-lg font-semibold disabled:opacity-60"
            type="submit"
          >
            Register
          </button>
          <p className="text-center text-sm text-gray-400">
            Have an account?{" "}
            <Link
              to="/sign-in"
              className="font-semibold text-accent hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>











      {/* <div className="flex items-center justify-center">



        <div className="bg-base-100 text-base-content p-8 rounded-xl shadow-md max-w-md w-[30vw]">
        
      </div>
      
      </div> */}
    </>
  );
};

export default Register;

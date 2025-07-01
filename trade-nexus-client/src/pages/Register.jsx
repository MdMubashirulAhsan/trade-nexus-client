import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import register from "../assets/lotties/register.json";
import axios from "axios";

const Register = () => {
  const { createUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register: formRegister,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { displayName, email, password, photoURL } = data;

    try {
      const result = await createUser(email, password);

      await updateProfile(result.user, { displayName, photoURL });

      const newUser = {
        displayName,
        email,
        photoURL,
        createdAt: new Date().toISOString(),
      };

      await axios.post(`${import.meta.env.VITE_API_URL}/users`, newUser);

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        timer: 1500,
        showConfirmButton: false,
      });

      reset();
      navigate(from, { replace: true });
    } catch (err) {
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

          <div className="card bg-base-200 w-full max-w-md shrink-0  shadow-2xl text-base-content">
            <div className="card-body">
              <h2 className="text-primary text-3xl font-bold text-center mb-[7vh]">
                Register
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full"
                  {...formRegister("displayName", {
                    required: "Full name is required",
                  })}
                />
                {errors.displayName && (
                  <p className="text-danger text-sm">
                    {errors.displayName.message}
                  </p>
                )}

                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  {...formRegister("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-danger text-sm">{errors.email.message}</p>
                )}

                <input
                  type="url"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  {...formRegister("photoURL", {
                    required: false,
                    pattern: {
                      value: /^(ftp|http|https):\/\/[^ "]+$/,
                      message: "Invalid URL",
                    },
                  })}
                />
                {errors.photoURL && (
                  <p className="text-danger text-sm">
                    {errors.photoURL.message}
                  </p>
                )}

                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  {...formRegister("password", {
                    required: "Password is required",
                    validate: (value) =>
                      /[A-Z]/.test(value) &&
                      /[a-z]/.test(value) &&
                      value.length >= 6
                        ? true
                        : "Password must be at least 6 characters and include uppercase and lowercase letters",
                  })}
                />
                {errors.password && (
                  <p className="text-danger text-sm">
                    {errors.password.message}
                  </p>
                )}

                <button
                  className="btn btn-primary w-full py-3 text-lg font-semibold"
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
    </>
  );
};

export default Register;

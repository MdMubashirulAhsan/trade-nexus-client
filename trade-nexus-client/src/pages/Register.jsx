import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { AuthContext } from "../contexts/AuthContext";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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

        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 6 characters and include uppercase and lowercase letters."
      );
      return;
    }

    try {
      await createUser(email, password)
        // await updateUser(form.name, form.photoURL);

        .then((result) => {
          console.log(result.user);

          const userProfile = {
            email,
            ...restFormData,
            creationTime: result.user?.metadata?.creationTime,
            lastSignInTime: result.user?.metadata?.lastSignInTime,
          };

          // save profile info in the db
          fetch("https://plant-care-server-navy.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userProfile),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your account is created.",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });

          navigate("/");
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

      <div className="hero bg-base-200 min-h-screen rounded-3xl">
        <div className="hero-content flex-col">
          <div className="card  w-full max-w-sm bg-gray-300 shadow-2xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  name="name"
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
                  type="text"
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
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button className="btn btn-primary w-full" type="submit">
                  Register
                </button>
                <p className="text-center text-sm text-gray-400">
                  Have an account?{" "}
                  <Link
                    to="/login"
                    className="text-green-400 hover:underline font-semibold"
                  >
                    Login
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
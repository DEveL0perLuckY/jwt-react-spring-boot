import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../Services/LoginService";
import { useForm } from "react-hook-form";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const handleSubbmitSignin = async (data) => {
    console.log(data);
    try {
      await Login(data);
      toast.success("Login successful!");
    } catch (error) {
      toast.error("Login Failed : " + error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Sign In</h2>
              <form onSubmit={handleSubmit(handleSubbmitSignin)}>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    User Name 
                  </label>
                  <input
                    type="text"
                    {...register("userName", {
                      required: "User Name  is required",
                    })}
                    className="form-control"
                    id="userName"
                    placeholder="Enter your userName"
                    required
                  />
                  {errors.userName && (
                    <span className="text-danger">{errors.userName.message}</span>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                  {errors.password && (
                    <span className="text-danger">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div className="d-grid">
                  <button
                    disabled={isSubmitting}
                    className="btn btn-secondary"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <p>
                  Don't have an account?{" "}
                  <a className="btn btn-outline-dark" href="/signup">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

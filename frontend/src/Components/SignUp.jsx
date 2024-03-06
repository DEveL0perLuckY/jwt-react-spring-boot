import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "../Services/Registration";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });
  
  const handleSubbmitSignup = async (data) => {
    console.log(data);
    try {
      const response = await Register(data);

    if (response instanceof Error) {
      // Handle the case where the response is an Error (user already exists)
      toast.error(`Registration error: ${response.message || 'User already exists'}`);
    } else {
      // Registration was successful
      toast.success("Registration successful!");
    }
  } catch (error) {
    // Handle other registration errors
    toast.error(`Registration error: ${error.message || 'Something went wrong'}`);
  }
    //   await Register(data);
    //   toast.success("Registration successful!");
    // } catch (error) {
    //   toast.error("Registration error: ", error);
    // }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSubbmitSignup)}>
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">
                      User Name
                    </label>
                    <input
                      {...register("userName", {
                        required: "User Name is required",
                        minLength: { value: 5, message: "minimum error is 8" },
                        maxLength: {
                          value: 20,
                          message: "maximum error is 12",
                        },
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message: "Only letters are allowed",
                        },
                      })}
                      type="text"
                      className="form-control"
                      id="userName"
                      placeholder="Enter your User Name"
                      required
                    />
                    {errors.userName && (
                      <span className="text-danger">
                        {errors.userName.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                    {errors.email && (
                      <span className="text-danger">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      {...register("password", {
                        required: "Password is required",
                      })}
                      type="password"
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
                      Sign Up
                    </button>
                  </div>
                </form>
                <div className="text-center mt-3">
                  <p>
                    Already have an account?{" "}
                    <a className="btn btn-outline-dark" href="/signin">
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

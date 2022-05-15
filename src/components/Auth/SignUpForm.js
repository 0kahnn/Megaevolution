import React from "react";
import GoogleIcon from "../../assets/icons/google-icons.png";

const SignUpForm = ({ formToggler }) => {
  return (
    <div className="form">
      <form className="w-100">
        <div className="form-section">
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" />
          </div>

          <div class="form-group mt-4">
            <label>Password</label>
            <input type="password" class="form-control" />
          </div>

          <div class="form-group mt-4">
            <label>Confirm Password</label>
            <input type="password" class="form-control" />
          </div>

          <div className="login-buttons">
            <button type="submit" class="login border-0">
              Sign Up
            </button>
            <span>Or</span>
            <button type="submit" class="login border-0">
              <img src={GoogleIcon} /> Sign Up With Google
            </button>
          </div>

          <div class="forgot-password text-center">
            <button onClick={formToggler} className="btn btn-link">
              Go Back To Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;

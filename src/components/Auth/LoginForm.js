import React from "react";

import FormImage from "../../assets/images/form_image.png";
import GoogleIcon from "../../assets/icons/google-icons.png";

const LoginForm = ({ formToggler }) => {
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

          <div class="forgot-password d-flex justify-content-end">
            <a href="#">Forgot Password?</a>
          </div>

          <div className="login-buttons">
            <button type="submit" class="login border-0">
              Login
            </button>
            <span>Or</span>
            <button type="submit" class="login border-0">
              <img src={GoogleIcon} /> Login With Google
            </button>
          </div>

          <div className="create-link">
            <span>
              Dont't have an account yet?{" "}
              <button onClick={formToggler} className="btn btn-link">
                Create an account
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;

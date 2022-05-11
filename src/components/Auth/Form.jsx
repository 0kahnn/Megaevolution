import React from "react";

import FormImage from "../../assets/images/form_image.png";
import GoogleIcon from "../../assets/icons/google-icons.png";

export default function Form() {
  return (
    <>
      <div className=" custom-container banner">
        <div className="row">
          <div className="col-md-4">
            <div className="form-image p-3">
              <img src={FormImage} />
            </div>
          </div>

          <div className="col-md-8 d-flex justify-content-center">
            <div className="form">
              <form className="w-100">
                <div className="form-section">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
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
                      <a href="#">Create an account</a>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

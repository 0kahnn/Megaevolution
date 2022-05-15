import React, { useState } from "react";

import FormImage from "../../assets/images/form_image.png";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default function Auth() {
  const [isLoginActive, setIsLoginActive] = useState(false);
  const loginHandler = () => {
    setIsLoginActive(true);
  };

  const formToggler = () => {
    setIsLoginActive(!isLoginActive);
  };
  return (
    <>
      <div className="custom-container banner">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <div className="form-image p-3">
              <img src={FormImage} />
            </div>
          </div>

          <div className="col-xs-12 col-md-7 d-flex justify-content-center">
            {isLoginActive ? (
              <LoginForm formToggler={formToggler} />
            ) : (
              <SignUpForm formToggler={formToggler} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

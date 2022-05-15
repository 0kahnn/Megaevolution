import Header from "../../components/Common/Header";
import Auth from "../../components/Auth/Auth";
import "../../assets/css/formComponent.css";
import EmailVerificationModal from "../../components/Auth/EmailVerificationModal";
import ThankYouModal from "../../components/Auth/ThankYouModal";
const Login = () => {
  return (
    <>
      <Header />
      <Auth />
      <EmailVerificationModal />
      <ThankYouModal />
    </>
  );
};
export default Login;

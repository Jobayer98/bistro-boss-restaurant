import bgImg from "../../assets/others/authentication.png";
import AuthBanner from "../../components/AuthBanner/AuthBanner";
import AuthImg from "../../components/AuthBanner/AuthImg";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <AuthBanner>
      <div
        className="shadow-3xl w-4/5 mx-auto border-l-2 border-t-2 rounded-sm flex justify-between items-center py-12"
        style={{
          backgroundImage: `url("${bgImg}")`,
        }}
      >
        <SignUpForm />
        <AuthImg />
      </div>
    </AuthBanner>
  );
};

export default SignUp;

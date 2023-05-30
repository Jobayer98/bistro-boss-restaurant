import bgImg from "../../assets/others/authentication.png";

const AuthBanner = ({ children }) => {
  return (
    <div
      className="min-h-[100vh] flex justify-center items-center"
      style={{
        backgroundImage: `url("${bgImg}")`,
      }}
    >
      {children}
    </div>
  );
};

export default AuthBanner;

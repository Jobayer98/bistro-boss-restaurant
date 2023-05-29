import bgImg from "../../assets/others/authentication.png";
import PageLeft from "./PageLeft";
import PageRight from "./PageRight";

const Login = () => {
  return (
    <div
      className="min-h-[100vh] flex justify-center items-center"
      style={{
        backgroundImage: `url("${bgImg}")`,
      }}
    >
      <div
        className="shadow-3xl w-4/5 mx-auto border-l-2 border-t-2 rounded-sm flex justify-between items-center py-12"
        style={{
          backgroundImage: `url("${bgImg}")`,
        }}
      >
        <PageLeft />
        <PageRight />
      </div>
    </div>
  );
};

export default Login;

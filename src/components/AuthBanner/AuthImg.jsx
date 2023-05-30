import loginImg from "../../assets/others/authentication2.png";

const AuthImg = () => {
  return (
    <div className="w-full lg:w-1/2">
      <figure>
        <img className="mx-auto" src={loginImg} alt="loginImg" loading="lazy" />
      </figure>
    </div>
  );
};

export default AuthImg;

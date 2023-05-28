import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="uppercase font-bold text-sm lg:flex gap-6 mr-12 hidden lg:visible">
      <Link to="/">home</Link>
      <Link to="/contact">contact us</Link>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/menu">our menu</Link>
      <Link to="/shop">our shop</Link>
    </div>
  );
};

export default Links;

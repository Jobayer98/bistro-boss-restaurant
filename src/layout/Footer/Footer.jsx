import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <footer>
      <div className="flex mt-16">
        <FooterLeft />
        <FooterRight />
      </div>

      <div className="footer footer-center p-4 bg-black text-white font-['Inter']">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

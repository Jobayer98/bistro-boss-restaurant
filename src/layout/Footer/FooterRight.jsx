import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const FooterRight = () => {
  return (
    <div className="bg-[#111827] text-center text-white font-['Inter'] w-1/2 py-12 flex flex-col gap-4">
      <h1 className="text-2xl font-medium uppercase">Follow Us</h1>
      <p className="text-sm">Join us on social medial</p>
      <div className="flex gap-6 text-3xl justify-center mt-2">
        <FaFacebookF />
        <BsInstagram />
        <BsTwitter />
      </div>
    </div>
  );
};

export default FooterRight;

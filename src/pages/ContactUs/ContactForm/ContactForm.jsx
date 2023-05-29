import { FaTelegramPlane } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ContactForm = () => {
  return (
    <section className="mt-16 max-w-screen-md mx-auto">
      <SectionTitle heading={"contact form"} subHeading={"Send Us a Message"} />
      <div className="font-['Inter'] bg-[#f3f3f3] p-16 pb-8">
        <form className="flex flex-col gap-4">
          <div className="flex gap-5">
            <label htmlFor="name" className="font-medium w-1/2">
              Name* <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 p-3 w-full rounded-md text-sm font-thin outline-gray-200"
              />
            </label>

            <label htmlFor="email" className="font-medium w-1/2">
              Email* <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 p-3 w-full rounded-md text-sm font-thin outline-gray-200"
              />
            </label>
          </div>
          <label htmlFor="phone" className="font-medium w-full">
            Phone* <br />
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="mt-2 p-3 w-full rounded-md text-sm font-thin outline-gray-200"
            />
          </label>
          <label htmlFor="message">
            Message* <br />
            <textarea
              name="message"
              placeholder="Write your message here"
              id="message"
              rows="8"
              className="w-full rounded-md mt-2 text-sm font-thin outline-gray-200"
            ></textarea>
          </label>

          <div className="mx-auto mt-8">
            <button
              type="submit"
              className="flex justify-center items-center gap-2 bg-gradient-to-r from-[#835d23] to-[#c48a2c] px-4 py-2 rounded-sm text-white text-lg font-medium"
            >
              Send Message <FaTelegramPlane className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

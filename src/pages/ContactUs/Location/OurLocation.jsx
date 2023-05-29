import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { HiLocationMarker, HiClock } from "react-icons/hi";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const OurLocation = () => {
  return (
    <section className="mt-16 max-w-screen-lg mx-auto">
      <SectionTitle heading={"our location"} subHeading={"Visit Us"} />
      <div className="grid grid-cols-3 gap-3">
        <div className="max-w-[320px] h-[250px] text-center border-[1px]">
          <div className="bg-[#d1a054] py-4 flex justify-center">
            <BsFillTelephoneForwardFill className="text-2xl text-white" />
          </div>
          <div className="font-['Inter'] bg-[#f3f3f3] w-[280px] h-[170px] mx-auto pt-8">
            <h1 className="text-lg font-medium uppercase">Phone</h1>
            <p className="text-xs mt-2">+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="max-w-[320px] h-[250px] text-center border-[1px]">
          <div className="bg-[#d1a054] py-4 flex justify-center">
            <HiLocationMarker className="text-2xl text-white" />
          </div>
          <div className="font-['Inter'] bg-[#f3f3f3] w-[280px] h-[170px] mx-auto pt-8">
            <h1 className="text-lg font-medium uppercase">Address</h1>
            <p className="text-xs mt-2">+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="max-w-[320px] h-[250px] text-center border-[1px]">
          <div className="bg-[#d1a054] py-4 flex justify-center">
            <HiClock className="text-2xl text-white" />
          </div>
          <div className="font-['Inter'] bg-[#f3f3f3] w-[280px] h-[170px] mx-auto pt-8">
            <h1 className="text-lg font-medium uppercase">working hours</h1>
            <p className="text-xs mt-2">
              Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;

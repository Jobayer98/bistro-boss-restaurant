const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-6 font-['Inter']">
      <p className="text-base font-normal text-[#BB8506]">---{subHeading}---</p>
      <h1 className="text-3xl font-[400] uppercase py-4 border-y-4 border-[#E8E8E8] my-2 px-12">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;

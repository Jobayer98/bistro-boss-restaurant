import Banner from "../../../../components/Banner/Banner";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Button from "../../../../components/UI/Button/Button";
import featureImg from "../../../../assets/home/featured.jpg";

const MenuInfo = () => {
  return (
    <Banner img={featureImg} className="h-[650px] my-24">
      <div className="bg-black bg-opacity-80 h-full flex flex-col items-center justify-center gap-3">
        <SectionTitle
          className={"text-white"}
          heading={"from our menu"}
          subHeading={"Chck it out"}
        />
        <div className="flex  justify-center gap-12 z-10">
          <figure>
            <img
              src={featureImg}
              alt=""
              loading="lazy"
              className="h-[280px] w-[100%]"
            />
          </figure>
          <div className="w-[40%] text-white font-['Inter'] text-left">
            <p className="text-2xl uppercase">March 20, 2023</p>
            <h2 className="text-4xl my-3">Where can i get some?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <Button
              className={
                "font-['Inter'] uppercase font-medium border-b-[3px] px-4 pb-2 pt-3 border-gray-400 mt-6 text-center rounded-full  hover:bg-gray-300 hover:text-black transition duration-500 ease-in-out"
              }
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
    </Banner>
  );
};

export default MenuInfo;

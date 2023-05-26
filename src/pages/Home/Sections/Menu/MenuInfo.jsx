import Background from "../../../../components/BackgroundImg/Background";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Button from "../../../../components/UI/Button/Button";
import featureImg from "../../../../assets/home/featured.jpg";

const MenuInfo = () => {
  return (
    <Background img={featureImg} className="h-[650px]">
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
                "btn text-white bg-transparent border-white border-2 border-t-0 border-l-0 border-r-0 mt-8 ml-3 uppercase tracking-widest"
              }
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default MenuInfo;

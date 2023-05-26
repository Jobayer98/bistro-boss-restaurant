import bistroImg from "../../../../assets/home/chef-service.jpg";
import Background from "../../../../components/BackgroundImg/Background";

const BistroInfo = () => {
  return (
    <Background img={bistroImg}>
      <div className="bg-base-100 p-16  w-[80%] lg:w-[70%] mx-auto">
        <h1 className="text-3xl font-normal uppercase mb-4">Bistro boss</h1>
        <p className="font-['Inter']">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </Background>
  );
};

export default BistroInfo;

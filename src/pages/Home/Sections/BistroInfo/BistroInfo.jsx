import bistroImg from "../../../../assets/home/chef-service.jpg";

const BistroInfo = () => {
  return (
    <div
      className="hero h-96 opacity-90 text-center flex items-center my-20 bg-auto"
      style={{
        backgroundImage: `url("${bistroImg}")`,
      }}
    >
      <div className="bg-base-100 p-16  w-[80%] lg:w-[70%] mx-auto">
        <h1 className="text-3xl font-normal uppercase mb-4">Bistro boss</h1>
        <p className="font-['Inter']">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroInfo;

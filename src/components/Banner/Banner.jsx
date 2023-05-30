const Banner = ({ img, children, className }) => {
  return (
    <div
      className={`hero text-center flex items-center ${className}`}
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      {children}
    </div>
  );
};

export default Banner;

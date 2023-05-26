const Background = ({ img, children, className }) => {
  return (
    <div
      className={`hero opacity-90 text-center flex items-center my-20 bg-auto  ${className}`}
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      {children}
    </div>
  );
};

export default Background;

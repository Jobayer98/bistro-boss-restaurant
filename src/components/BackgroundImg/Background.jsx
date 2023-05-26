const Background = ({ img, children, className }) => {
  return (
    <div
      className={`hero h-96 opacity-90 text-center flex items-center my-20 bg-auto max-w-4xl mx-auto ${className}`}
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      {children}
    </div>
  );
};

export default Background;

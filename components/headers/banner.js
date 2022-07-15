const Banner = ({ children }) => {
  return (
    <>
      <div className="min-h-[26rem] bg-gradient-to-b from-secondary flex justify-center items-center text-white text-5xl">
        {children}
      </div>
    </>
  );
};

export default Banner;

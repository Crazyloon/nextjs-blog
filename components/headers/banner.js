const Banner = ({ children, title, pattern: Pattern, className }) => {
  return (
    <>
      <header
        className={`min-h-[24rem] -mx-3 flex flex-col relative border-b-secondary`}
      >
        <Pattern />
        <h1 className="px-3 z-10 md:text-5xl lg:text-7xl font-extrabold leading[1.2] tracking[-0.05rem] mt-24 mx-auto text-center">
          {title}
        </h1>
        <div className="px-3 z-10 max-w-3xl text-lg leading[1.2] tracking[-0.05rem] my-16 mx-auto">
          {children}
        </div>
      </header>
    </>
  );
};

export default Banner;

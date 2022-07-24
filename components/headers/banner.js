const Banner = ({ children, title, pattern: Pattern, className }) => {
  return (
    <>
      <header
        className={`relative -mx-3 flex min-h-[24rem] flex-col border-b-secondary`}
      >
        <Pattern />
        <h1 className="leading[1.2] tracking[-0.05rem] z-10 mx-auto mt-24 px-3 text-center font-extrabold md:text-5xl lg:text-7xl">
          {title}
        </h1>
        <div className="leading[1.2] tracking[-0.05rem] z-10 my-16 mx-auto max-w-3xl px-3 text-lg">
          {children}
        </div>
      </header>
    </>
  );
};

export default Banner;

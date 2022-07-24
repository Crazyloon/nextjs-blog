const PageLayout = (props) => {
  return (
    <section className={`${props.className} max-w-4xl m-auto`}>
      {props.children}
    </section>
  );
};

export default PageLayout;

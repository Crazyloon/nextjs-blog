const Hint = (props) => {
  return (
    <small className="block text-accent mx-auto max-w-[90%] mt-[-1rem]">
      {props.children}
    </small>
  );
};

export default Hint;

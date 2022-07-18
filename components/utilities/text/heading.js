const Heading = ({ size, className, ...props }) => {
  switch (size) {
    case 1:
      return (
        <h1 className={`font-bold ${className || ""}`}>{props.children}</h1>
      );
    case 2:
      return (
        <h2 className={`font-bold ${className || ""}`}>{props.children}</h2>
      );
    case 3:
      return (
        <h3 className={`font-bold ${className || ""}`}>{props.children}</h3>
      );
    case 4:
      return (
        <h4 className={`font-bold ${className || ""}`}>{props.children}</h4>
      );
    case 5:
      return (
        <h5 className={`font-bold ${className || ""}`}>{props.children}</h5>
      );
    case 6:
      return (
        <h6 className={`font-bold ${className || ""}`}>{props.children}</h6>
      );
  }
};

export default Heading;

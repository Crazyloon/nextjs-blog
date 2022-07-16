const CardBodyContent = (props) => {
  return <div className={`pl-2 ${props.className}`}>{props.children}</div>;
};

export default CardBodyContent;

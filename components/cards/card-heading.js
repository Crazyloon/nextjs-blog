const CardHeading = (props) => {
  return (
    <div className="bg-secondary text-slate-100 dark:bg-slate-600  p-2 ">
      {props.children}
    </div>
  );
};

export default CardHeading;

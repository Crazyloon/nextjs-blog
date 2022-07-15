const BasicCard = ({ children, ...props }) => {
  return (
    <div className="border-secondary  dark:shadow-slate-300 border-2 dark:border-slate-400 my-6">
      {children}
    </div>
  );
};

export default BasicCard;

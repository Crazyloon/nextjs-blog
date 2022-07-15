const Achievement = ({ achievement, dismiss }) => {
  return (
    <div className="relative mb-2 bg-emerald-500 rounded-lg p-4 h-fit text-link-text animate-slideUp opacity-0">
      <button
        className="absolute right-2 top-2 border w-6 h-6 flex justify-center items-center rounded-sm border-emerald-100 cursor-pointer active:scale-95"
        onClick={() => dismiss()}
      >
        X
      </button>
      <h4 className="text-link-text">{achievement.name}</h4>
      <span>{achievement.description}</span>
    </div>
  );
};

export default Achievement;

import Acorn from "../../icons/acorn";

const Wisdom = (props) => {
  return (
    <div className="w-full min-h-[60px] flex bg-secondary-faded my-8 [&>p]:m-auto [&>p]:p-2">
      <i className="w-8 p-1 bg-secondary">
        <Acorn fill="#EEE" />
      </i>
      {props.children}
    </div>
  );
};

export default Wisdom;

/*
    width: 100%;
    height: 60px;
    border-left: 10px solid var(--accent);
    padding: 8px;
    display: flex;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: hsla(334,50%,50%, 0.2);
*/

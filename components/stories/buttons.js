const Buttons = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="min-w[300px] min-h[200px] m-5 flex flex-col items-center justify-between">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-primary-outline">Primary-Outline</button>
      </div>

      <div className="min-w[300px] min-h[200px] gray m-5 flex flex-col items-center justify-between">
        <button className="btn btn-primary-dark">Primary-Dark</button>
        <button className="btn btn-primary-dark-outline">
          Primary-Dark-Outline
        </button>
      </div>
      <div className="min-w[300px] min-h[200px] row-span-2 m-5 flex flex-col items-center justify-between">
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-secondary-outline">Secondary-Outline</button>
      </div>
      <div className="min-w[300px] min-h[200px] row-span-2 m-5 flex flex-col items-center justify-between">
        <button className="btn btn-secondary-dark">Secondary-dark</button>
        <button className="btn btn-secondary-dark-outline whitespace-nowrap">
          Secondary-dark-Outline
        </button>
      </div>
      <div className="min-w[300px] min-h[200px] m-5 flex flex-col items-center justify-between">
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-accent-outline">Accent-Outline</button>
      </div>
      <div className="min-w[300px] min-h[200px] m-5 flex flex-col items-center justify-between">
        <button className="btn btn-success">Success</button>
        <button className="btn btn-success-outline">Success-Outline</button>
      </div>
      <div className="min-w[300px] min-h[200px] m-5 flex flex-col items-center justify-between">
        <button className="btn btn-info">Info</button>
        <button className="btn btn-info-outline">Info-Outline</button>
      </div>
      <div className="min-w[300px] min-h[200px] m-5 flex flex-col items-center justify-between">
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-warning-outline">Warning-Outline</button>
      </div>
      <div className="min-w[300px] min-h[200px] m-5 flex flex-col items-center justify-between">
        <button className="btn btn-error">Error</button>
        <button className="btn btn-error-outline">Error-Outline</button>
      </div>
    </div>
  );
};

export default Buttons;

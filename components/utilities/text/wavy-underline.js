const WavyUnderline = ({ children }) => {
  return (
    <em className="decoration-wavy underline decoration-accent-active not-italic underline-offset-4">
      {children}
    </em>
  );
};

export default WavyUnderline;

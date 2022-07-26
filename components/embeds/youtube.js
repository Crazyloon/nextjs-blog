const YouTube = ({ src, title }) => {
  return (
    <div className="mt-4 aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={src}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YouTube;

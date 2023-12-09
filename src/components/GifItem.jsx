/* eslint-disable react/prop-types */
export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title.trim() ? title : "Super Gif"}</p>
    </div>
  );
};

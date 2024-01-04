import PropTypes from "prop-types";

/* eslint-disable react/prop-types */
export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title?.trim() ? title : "Super Gif"}</p>
    </div>
  );
};

//Añadir PropTypes

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
/*
 a. title obligatorio
 b. url obligatorio

 2. evaluar snapshot
 
 */

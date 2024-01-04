import { useState } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
  const [inputCategory, setInputCategory] = useState("");

  const handleInputChange = ({ target }) => {
    setInputCategory(target.value);
  };

  const onSubmit = (event) => {
    //console.log("Hola mundo desde el Submit");
    event.preventDefault();
    if (inputCategory.trim().length <= 1) return;
    // console.log(inputCategory);
    onNewCategory(inputCategory);
    setInputCategory("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        value={inputCategory}
        onChange={handleInputChange}
        placeholder="Buscar GIFs"
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

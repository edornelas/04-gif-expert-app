import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
  const [inputCategory, setInputCategory] = useState("");

  const handleInputChange = ({ target }) => {
    setInputCategory(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputCategory.trim().length <= 1) return;
    // console.log(inputCategory);
    onNewCategory(inputCategory);
    setInputCategory("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={inputCategory}
        onChange={handleInputChange}
        placeholder="Buscar GIFs"
      />
    </form>
  );
};

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Produce',
  })

  function handleFormChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    console.log(`Updating ${inputName} to ${inputValue}`)
    setFormData({
      ...formData,
      [inputName]: inputValue,
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormData({
      ...formData,
      name: ''
    })
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category,
    }
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleFormChange} />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

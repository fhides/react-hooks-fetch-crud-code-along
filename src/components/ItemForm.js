import React, { useState } from "react";

function ItemForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    
    const itemData = {
      name: name,
      category: category,
      isInCart: false,
    };
    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((newItem) => onAddItem(newItem));
  }
}
export default ItemForm;

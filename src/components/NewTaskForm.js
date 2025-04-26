import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const[text, setText]=useState("")
  const[category, setCategory]=useState(categories[0] ||"");

  const handleTextchange = (event) => {
    setText(event.target.value);
  };
  const handleCategoryChange =(event) =>{
    setCategory(event.target.value)
  }
  const handleSubmit = (event) =>{
    event.preventDefault();

    if(text.trim()){
      const newTask = {
        text:text,
        category: category,
      };
      onTaskFormSubmit(newTask)
      setText("")
      setCategory(categories[0] || "")
    }
  }

  return (
    <form  className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-details">Details</label>
      <input
      id="task-details"
        type="text"
        name="text"
        value={text}
        onChange={handleTextchange}
      />
      
     <label htmlFor="task-category">Category</label>
      <select
        id="task-category"
        name="category"
        value={category}
        onChange={handleCategoryChange}
      >
        {categories
          .filter((cat) => cat !== "All")
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>
      <input type="submit" value="Add task" />
      {/* <button type="submit" >Add Task</button>  */}
    </form>
  );
}
    
export default NewTaskForm;

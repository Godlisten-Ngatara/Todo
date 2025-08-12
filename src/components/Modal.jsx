import React, { useState } from "react";
import { X } from "lucide-react";
import Title from "./Title";
import Label from "./Label";
import Input from "./Input";
import DropDownMenu from "./DropDown";
import TextArea from "./TextArea";
import Button from "./Button";
import { getCategories, getPriorities } from "../database";
import { getNameById } from "../utilities/getNameById";
import { useValidation } from "../hooks/useValidation";
function Modal({ visible, onClose, onAddTodo }) {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    category: "",
    priority: "",
    deadline: "",
    completed: false,
  });
  const [errors, setErrors] = useState({});
  const [safePayload, setSafePayload] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);

  const handleSelectCategory = (id) => {
    const category = getNameById(getCategories(), id);
    if (!category) return; // Handle case where category is not found
    setSelectedCategory(category);
    setFormData((prev) => ({
      ...prev,
      category: category,
    }));
  };
  const handleSelectPriority = (id) => {
    const priority = getNameById(getPriorities(), id);
    if (!priority) return; // Handle case where priority is not found
    setSelectedPriority(priority);
    setFormData((prev) => ({
      ...prev,
      priority: priority,
    }));
  };
  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { errors, safePayload, valid } = useValidation(formData);
    //update errors if there are any
    setErrors(errors);
    setSafePayload(safePayload);

    // Handle form submission logic here
    if (!valid) {
      console.error("Form validation failed", errors);
      return;
    }
    // Process the safePayload as needed
    console.log("Form submitted successfully with data:", safePayload);

    // reset form data
    setFormData({
      title: "",
      desc: "",
      category: "",
      priority: "",
      deadline: "",
      completed: false,
    });

    onClose(false); // Close the modal after submission
  };
  return (
    visible && (
      <div>
        <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed top-4 right-8 w-[2rem] h-[2rem] rounded-[100%] bg-white flex justify-center items-center">
            <X
              style={{ color: "red", opacity: "0.8", cursor: "pointer" }}
              onClick={() => onClose(false)}
            />
          </div>
          <form
            className="bg-neutral-100 rounded-lg p-6 shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              handleFormSubmit(e);
              onAddTodo(safePayload);
            }}
          >
            <h2 className="text-gray-800 font-bold mb-4">Add Task</h2>

            <div className="mb-4">
              <Label className="text-gray-700 font-semibold">Task Title*</Label>
              {/* if title is not filled display error */}
              {errors.title && (
                <p className="text-red-500 text-sm mb-2">{errors.title}</p>
              )}
              <Input
                name="title"
                placeholder="Enter task title"
                type="text"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Label className="text-gray-700 font-semibold">
                Description(Optional)
              </Label>
              <TextArea
                name="desc"
                placeholder="Write task description"
                value={formData.desc}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Label className="text-gray-700 font-semibold">Category*</Label>
              {/* if category is not selected display error */}
              {errors.category && (
                <p className="text-red-500 text-sm mb-2">{errors.category}</p>
              )}
              <DropDownMenu
                items={getCategories()}
                onSelect={handleSelectCategory}
                selected={selectedCategory}
              />
            </div>
            <div className="mb-4">
              <Label className="text-gray-700 font-semibold">Priority</Label>
              <DropDownMenu
                items={getPriorities()}
                onSelect={handleSelectPriority}
                selected={selectedPriority}
              />
            </div>
            <div className="">
              <Label className="text-gray-700 font-semibold">
                Deadline(optional)
              </Label>
              <Input name="deadline" type="date" onChange={handleChange} />
            </div>
            <div className="mt-4">
              <Button size="sm" type="submit">
                Add Task
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default Modal;

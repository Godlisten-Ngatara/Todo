import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { Plus, ListFilterPlus } from "lucide-react";
import Card from "../components/Card";
import Label from "../components/Label";
import Input from "../components/Input";
import List from "../components/List";
import DropDown from "../components/DropDown";
import Modal from "../components/Modal";
import CardTitle from "../components/CardTitle";
import CardBody from "../components/CardBody";
import DropDownMenu from "../components/DropDown";
import { getCategories, getPriorities, getStatus } from "../database";
import { getNameById } from "../utilities/getNameById";
function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState(null);

  // Initial todo state
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  }
  const handleSelectStatus = (id) => {
    const statusValue = getNameById(getStatus(), id);
    if (!statusValue) return; // Handle case where status is not found
    setSelectedStatus(statusValue);
  };
  // log todos only they are added
  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  return (
    <div className="w-3/4 mx-auto bg-gray-100">
      <h1 className="font-bold">Todo App</h1>
      <p className="text-gray-700 mb-6">
        Organize your tasks with texts and priorities
      </p>
      <Button className="mb-6" onClick={() => setIsVisible(true)}>
        <Plus className="mr-2" />
        Add Task
      </Button>
      <Card>
        <CardTitle className="inline-flex gap-x-2 mb-4">
          <ListFilterPlus />
          <span>Filter & Search</span>
        </CardTitle>
        <CardBody>
          <div className="flex justify-around items-center mb-4">
            <div>
              <Label>Search tasks</Label>
              <Input
                name="search"
                placeholder="Search for tasks"
                type="text"
                className=" mt-2 mb-4 w-[24rem]"
              />
            </div>
            <div>
              <Label>Category</Label>
              <DropDownMenu className="mt-2 mb-4" items={getCategories()} />
            </div>
            <div>
              <Label>Priority</Label>
              <DropDownMenu
                className="mt-2 mb-4"
                items={getPriorities()}
              />
            </div>
            <div>
              <Label>Status</Label>
              <DropDownMenu
                className="mt-2 mb-4"
                items={getStatus()}
                onSelect={handleSelectStatus}
                selected={selectedStatus}
              />
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="mt-6 grid grid-cols-4 gap-x-4">
        <Card>
          <CardTitle>1</CardTitle>
          <CardBody>Total tasks</CardBody>
        </Card>
        <Card>
          <CardTitle>1</CardTitle>
          <CardBody>Total tasks</CardBody>
        </Card>
        <Card>
          <CardTitle>1</CardTitle>
          <CardBody>Total tasks</CardBody>
        </Card>
        <Card>
          <CardTitle>1</CardTitle>
          <CardBody>Total tasks</CardBody>
        </Card>
      </div>
      <Modal visible={isVisible} onClose={setIsVisible} onAddTodo={addTodo}/>
    </div>
  );
}

export default Home;

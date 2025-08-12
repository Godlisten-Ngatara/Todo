import React from "react";
import Button from "../components/Button";
import { Plus } from "lucide-react";
import Card from "../components/Card";
import Label from "../components/Label";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import DropDownMenu from "../components/DropDown";
import Modal from "../components/Modal";
function Components() {
  
  return (
    <div className="w-3/4 mx-auto">
      <Button size="lg" disabled={true}>Add Task</Button>
      <Card cardTitle="Test" cardText="Test"/>
      <Label labelText="Test"/>
      <Input inputName="username" inputPlaceholder="Search for items" inputType="text"/>
      <TextArea/>
      <DropDownMenu/>
      <Modal/>
    </div>
  );
}

export default Components;

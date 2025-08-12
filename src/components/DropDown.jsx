import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";
import DropDownItem from "./DropDownItem";
import { ChevronDown } from "lucide-react";
function DropDownMenu({ className = "", selected, onSelect, items = [] }) {
  const [isOpen, setisOpen] = useState(false);
  const dropDownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setisOpen(false);
    }
  };
  // Close dropdown when clicking outside
  document.addEventListener("mousedown", handleClickOutside);

  // Cleanup the event listener on component unmount
  useEffect(() => {
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className={`rounded-lg relative ${className}`} ref={dropDownRef}>
      <Button size="md" variant="secondary" onClick={toggleDropdown}>
        {selected ?? "Select an option"}
        <ChevronDown className="ml-4" />
      </Button>
      {isOpen && items.length > 0 && (
        <div className="py-4 shadow-2xl rounded-lg absolute z-10 bg-white w-full top-12">
          <ul className="flex flex-col gap-y-4 mx-2">
            {items?.map((item, index) => (
              <DropDownItem
                key={item.id || index}
                onSelect={() => {
                  onSelect(item.id);
                  setisOpen(false);
                }}
              >
                {item.name}
              </DropDownItem>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;

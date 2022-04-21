import React, { useState } from "react";
import "./message.css";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";

function Message({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <div
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >

      </div>
      {open && (
        <div className="messageList">
          {items.map((item) => (
            <div className="messageListItem" key={item.id}>
              <div type="button" onClick={() => handleOnClick(item)} className="messageListPerItem">
                <BsPeople className="optionIcon" />
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && "Clicked"}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Message;

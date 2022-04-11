import React, { useState } from "react";
import "./channel.css";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineNumber, AiOutlinePlus } from "react-icons/ai";

function Channel({ title, items, multiSelect = false }) {
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
        <div className="channelTitle">
          <div className="channelName">
            {title}
            {open ? (
              <MdOutlineArrowDropUp className="optionIconChannel" />
            ) : (
              <MdOutlineArrowDropDown className="optionIconChannel" />
            )}
          </div>
          <div className="channelAdd">
            <AiOutlinePlus className="optionIcon" />{" "}
          </div>
        </div>
      </div>
      {open && (
        <ul className="channelList">
          {items.map((item) => (
            <div className="channelListItem" key={item.id}>
              <div type="button" onClick={() => handleOnClick(item)} className="channelListPerItem">
                <AiOutlineNumber className="optionIcon" />
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && "Clicked"}</span>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Channel;

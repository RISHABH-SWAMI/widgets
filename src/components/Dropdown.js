import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if(ref.current && ref.current.contains(event.target)) {
        // console.log(ref.current);
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    //When we remove entire dropdown component through toggle button,
    //This function is get called right before the onBodyClick() function.
    //So it is a great location for doing any kind of cleanup.

    return () => {
      console.log('clean up')
      document.body.removeEventListener('click', onBodyClick);
    }
  },[]);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      // In React, null means don't render anything.
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="ui field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active': ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

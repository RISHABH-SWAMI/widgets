import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React",
    content: "React is a frontend javascript Library",
  },
  {
    title: "Why use React",
    content: "React is a favourite JS library among enigineers",
  },
  {
    title: "How do you use React",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The color Red",
    value: "Red",
  },
  {
    label: "The color Green",
    value: "Green",
  },
  {
    label: "A shade of Blue",
    value: "Blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* Navigation for all Widgets */}
      <Header />
      <Route path="/">
        <Accordion items={items} /> 
      </Route>

      <Route path="/search">
        <Search /> 
      </Route>

      <Route path="/dropdown">
        <Dropdown 
        label="Select a color"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
         /> 
      </Route>

      <Route path="/translate">
        <Translate /> 
      </Route>

      {/* Accordion Widget */
      /* <Accordion items={items} /> */

      /* Search Widget */
      /* <Search /> */

      /* Dropdown widget */
      /* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toogle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : (
        ""
      )} */

      /* Translate Widget */
      /* <Translate /> */}

    </div>
  );
};

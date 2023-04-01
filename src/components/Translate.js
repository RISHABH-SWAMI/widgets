import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "sanskrit",
    value: "sa",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "Italian",
    value: "it",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div style={{padding: '15px 15px'}}>
      <div className="ui form">
        <div className="field">
            <label>Type Text</label>
          <input
          style={{marginBottom:'30px'}}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr/>
      <br />
      <h2>Output</h2>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;

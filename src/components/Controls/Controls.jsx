import { useState } from "react";
import "./Controls.css";

const Controls = ({ filterType, onChangeFilterType, onSubmit }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = () => {
    onSubmit(text);
    setText("");
  }

  return (
    <div className="controls">
      <input type="text" className="input" value={text} onChange={handleChange} />
      <button className="button" onClick={handleSubmit}>추가</button>
      <select className="select" value={filterType} onChange={e=> onChangeFilterType(e.target.value)}>
        <option className="select-option" value="All">전체</option>
        <option className="select-option" value="TODO">할 일</option>
        <option className="select-option" value="COMPLETED">완료</option>
      </select>
    </div>
  );
};

export default Controls;

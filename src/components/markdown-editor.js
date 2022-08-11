import React from "react";
import styled from "styled-components";

export const MarkdownEditor = ({ onMdChange, content, onSave }) => {
  return (
    <div>
      <MdInput
        placeholder="Enter Markdown Text"
        onChange={onMdChange}
        value={content}
      ></MdInput>
      {/* <SaveBtn className="btn btn--primary" onClick={onSave}>Save</SaveBtn> */}
    </div>
  );
};

const MdInput = styled.textarea`
  height: 400px;
`;

const SaveBtn = styled.button`
  margin-top: 10px;
`;

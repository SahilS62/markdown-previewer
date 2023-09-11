import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  color: black;
`;

const StyledTextArea = styled.textarea`
  width: 95%;
  height: 200px;
  padding: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;


interface MarkdownInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <h2>Markdown Input</h2>
      <p>Click on Toggle Guide to learn about applying changes! </p>
      <StyledTextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your Markdown here..."
      />
    </InputContainer>
  );
};

export default MarkdownInput;

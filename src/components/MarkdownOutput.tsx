import React from 'react';
import styled from 'styled-components';

const OutputContainer = styled.div`
  background-color: black;
  padding: 10px;
  border: 1px solid #ccc;
`;

interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <h2>Markdown Output</h2>
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </OutputContainer>
  );
};

export default MarkdownOutput;

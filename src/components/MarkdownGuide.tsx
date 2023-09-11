import React from 'react';
import styled from 'styled-components';

const GuideContainer = styled.div`
  background-color: #f0f0f0;
  color: black;
  padding: 10px;
  border: 1px solid #ccc;
`;

const MarkdownGuide: React.FC = () => {
  return (
    <GuideContainer>
      <h2>Markdown Guide</h2>
      <ul>
        <li>
          <code>&lt;h1&gt;Heading 1&lt;/h1&gt;</code> - Large Heading
        </li>
        <li>
          <code>&lt;h2&gt;Heading 2&lt;/h2&gt;</code> - Medium Heading
        </li>
        <li>
          <code>&lt;strong&gt;Bold Text&lt;/strong&gt;</code> - <strong>Bold Text</strong>
        </li>
        <li>
          <code>&lt;em&gt;Italic Text&lt;/em&gt;</code> - <em>Italic Text</em>
        </li>
        {/* Add more Markdown syntax examples here */}
      </ul>
    </GuideContainer>
  );
};

export default MarkdownGuide;

import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import MarkdownGuide from './components/MarkdownGuide';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center vertically */
  min-height: 100vh; /* Ensure the container takes the full viewport height */
  padding: 20px;
`;

function App() {
  // Define the initial state for the markdown text and a boolean to toggle the guide
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  // Event handler to update the markdown text when the user types in the textarea
  const handleChange = (newMarkdown: string) => {
    setMarkdown(newMarkdown);
  };

  // Function to toggle the guide
  const toggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <AppContainer>
      <Header onToggleGuide={toggleGuide} />
      {showGuide && <MarkdownGuide />}
      <div>
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </div>
    </AppContainer>
  );
}

export default App;

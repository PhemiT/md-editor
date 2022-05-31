import { useState } from 'react';
import './App.css';
import styled from 'styled-components'
import MarkedInput from './components/MarkedInput';
import Markdown from './components/Markdown';
import EditorContext from './editorContext';

const AppContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div `
  font-size: 25px;
  font-weight: 300;
  margin: 19px 0;
  display: flex;
  align-items: center;
`

const EditorContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {

  const [markdownText, setMarkdownText] = useState("")
  const contextValue = {
    markdownText,
    setMarkdownText
  }

  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <Title>Markdown Editor</Title>
        <EditorContainer>
          <MarkedInput />
          <Markdown />
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>  
  );
}

export default App;

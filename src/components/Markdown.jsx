import React, { useContext } from 'react'
import styled from 'styled-components'
import editorContext from '../editorContext'
import ReactMarkdown from 'react-markdown'

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 400;
`

const ResultArea = styled.div`
  width: 100%;
  height: 300px;
  border: none;
  font-size: 17px;
  word-wrap: break-word;
`

const Markdown = () => {
    const { markdownText } = useContext(editorContext)

  return (
    <Container>
      <TitleContainer>
        <Title>Preview</Title>
      </TitleContainer>
        <ResultArea>
            <ReactMarkdown children={markdownText} />
        </ResultArea>
    </Container>
  )
}

export default Markdown
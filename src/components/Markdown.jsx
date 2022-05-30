import React, { useContext } from 'react'
import styled from 'styled-components'
import editorContext from '../editorContext'
import ReactMarkdown from 'react-markdown'

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 400;
`

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`

const Markdown = () => {
    const { markdownText } = useContext(editorContext)

  return (
    <Container>
        <Title>Preview</Title>
        <ResultArea>
            <ReactMarkdown children={markdownText} />
        </ResultArea>
    </Container>
  )
}

export default Markdown
import React, {useContext} from 'react'
import styled from 'styled-components'
import editorContext from '../editorContext'

const Container = styled.div`
  width: 50%;
  height: 300px;
  padding: 15px;
  background: #0D1117;
  border: 0.8px solid #C9D1D9;
  border-radius: 6px;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 300;
`

const TextArea = styled.textarea`
  width: 100%;
  min-height: 90%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
  background-color: #0D1117;
  color: #C9D1D9;
`



const MarkedInput = (props) => {

    const { setMarkdownText } = useContext(editorContext)
    const onInputChange = e => {
        const newValue = e.currentTarget.value;
        setMarkdownText(newValue)
    }

  return (
    <Container>
        <Title>Markdown</Title>
        <TextArea onChange={onInputChange} />
    </Container>
  )
}

export default MarkedInput
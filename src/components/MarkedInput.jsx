import React, {useContext} from 'react'
import styled from 'styled-components'
import editorContext from '../editorContext'

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 300;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
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
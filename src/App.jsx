import styled from '@emotion/styled'
import React, { useState } from 'react'
import DarkModeToggle from './components/DarkModeToggle'
import {
  Button,
  Card,
  Footer,
  Header,
  Loader,
  LoadingOverlay,
  Navbar,
  Text,
} from '@mantine/core'
import useWhisper from './hooks/useWhisper'
import { IconMicrophone } from '@tabler/icons-react'

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`

const RecordButton = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [text, setText] = useState('')

  useWhisper(isRecording, (text) => {
    console.log('whisper', text)
    setText(text)
  })
  return (
    <Card
      shadow="sm"
      display="flex"
      sx={{ justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Text color={text ? 'black' : 'grey'}>
        {text ? text : 'Say something...'}
      </Text>
      <Button
        ml="md"
        sx={{ borderRadius: '50%', height: 60, width: 60 }}
        onClick={() => setIsRecording(!isRecording)}
        color={isRecording ? 'red' : 'dark'}
      >
        {isRecording ? (
          <Loader variant="dots" color="white" />
        ) : (
          <IconMicrophone />
        )}
      </Button>
    </Card>
  )
}

const App = () => {
  return (
    <>
      <Header
        height={64}
        sx={{
          margin: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1rem',
        }}
      >
        <div />
        <DarkModeToggle />
      </Header>
      <Container>
        <h1>Template</h1>
        <RecordButton />
      </Container>
    </>
  )
}

export default App

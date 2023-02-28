import { useState } from 'react'
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

export const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([])
  console.log(formats)

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats)
  }
  return (

    // Stack is a container like a div - it have direction propery and spacing
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://google.com'>
          Text
        </Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
        <Button variant='contained' color='success'>
          Success
        </Button>
      </Stack>

      // display flex will affect the size of the button

      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </Stack>


      <Stack spacing={2} direction='row'>
        // startIcon for puting the icon at the start of the Button
        <Button
          variant='contained'
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert('Clicked')}>
          Send
        </Button>
        // endIcon for puting the icon at the end of the Button
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        //IconButton used for Buttons that are only Icon
        <IconButton color='success' size='small' aria-label='send'>
          <SendIcon />
        </IconButton>
      </Stack>


      <Stack direction='row'>
        // ButtonGroup for group of buttons beside each other with specific style - sticked together
        // aria-label is for accessibility ? *search more* 
        // onCLick should set on each Button separately
        <ButtonGroup
          variant='text'
          orientation='vertical'
          size='small'
          color='secondary'
          aria-label='alignment button group'>
          <Button onClick={() => alert('Left clicked')}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>


      <Stack direction='row'>
        // format is an state
        // *exclusive* : when we add exclusive it means we want to choose only one option...
        // it means when we select one the others will be unselected and the result will be an string only
        // but when we dont use it we can select multiple options or all of them and the result will be an array of strings
        <ToggleButtonGroup
          exclusive
          value={formats}
          onChange={handleFormatChange}
          aria-label='text formatting'>
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined' aria-label='underline'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

import { useState } from 'react'
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText
} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  console.log(skills)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked)
  }
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)
    if (index === -1) {
      //if not exist so add it
      setSkills([...skills, event.target.value])
    } else {
      //if exist remove it
      setSkills(skills.filter(skill => skill !== event.target.value))
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={acceptTnC}
              onChange={handleChange}
              size='small'
              color='secondary'
            />
          }
          label='Accept terms and conditions'
        />
      </Box>

      //using Icon for checkbox like a Bookmark icon
      //here we are not using the FormControlLabel and using the Checkbox component directly instead-why? Search it !
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl
          //this will change the label color to red 
          //we can show helper text by importing FormHelperText component and using it at the end
          error
        >
          <FormLabel>Skills</FormLabel>
          <FormGroup
          // for align the checkboxes in a row we can use *row* here
          >
            <FormControlLabel
              control={
                <Checkbox
                  value='html'
                  //we are checking that the html exist on the state or not 
                  //this will return a bolean for checked prop
                  checked={skills.includes('html')}
                  onChange={handleSkillChange}
                />
              }
              label='HTML'
            />
            <FormControlLabel
              control={
                <Checkbox
                  value='css'
                  checked={skills.includes('css')}
                  onChange={handleSkillChange}
                />
              }
              label='CSS'
            />
            <FormControlLabel
              control={
                <Checkbox
                  value='javascript'
                  checked={skills.includes('javascript')}
                  onChange={handleSkillChange}
                />
              }
              label='JavaScript'
            />
          </FormGroup>
          <FormHelperText>Invalid Selction</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}

import { Stack, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction='row'>
      <Badge badgeContent={5} color='secondary'>
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color='secondary'
        //if there is badgeContent zero the badge doesnt show until we include this prop 
        showZero
      >
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color='secondary'
        //if the number of badge number become more than 99 it will show it like +99
        //but we can change it like below
        max={999}
      >
        <MailIcon />
      </Badge>
      <Badge color='secondary'
        //only showing a dot 
        variant='dot'
        
        // invisible={unreadEmails.length === 0}
      >
        <MailIcon />
      </Badge>
    </Stack>
  )
}

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel='Navigation speed dial'
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={
        <SpeedDialIcon
          //this icon will show a pen instead of plus after clicking
        openIcon={<EditIcon />}
      />}
    >
      <SpeedDialAction icon={<CopyIcon />}
        //describe the icon on hover or long press in mobile
        tooltipTitle='Copy'
        //this will make the tooltip always shown
        tooltipOpen
      />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' tooltipOpen />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' tooltipOpen />
    </SpeedDial>
  )
}

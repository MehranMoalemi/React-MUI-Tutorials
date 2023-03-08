import { Stack, Rating } from '@mui/material'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3)
  console.log(value)
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue)
  }
  return (
    //div
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        // with this prop you can select or highlight half of a rating or star
        precision={0.5}
        size='large'
        //the icon when is selected - it can be a heart instead of start
        icon={<FavoriteIcon fontSize='inherit' color='error' />}
        //the icon when is unselected - it can be a heart instead of start
        emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
        //only for read-no changing
        readOnly
        //only highlit the selected emoji or icon
        highlightSelectedOnly
      />
    </Stack>
  )
}

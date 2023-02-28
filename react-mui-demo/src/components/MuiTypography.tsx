import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      // gutterBottom is used for adding margin bottom
      // we can use the variant as h4 but setting the component to be an h1 tag and
      //it only have h4 style by using the component property
      <Typography variant='h4' component='h1' gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>
      <Typography variant='subtitle1'>subtitle1</Typography>
      <Typography variant='subtitle2'>subtitle2</Typography>
      // the Typography component without any propert is the default and have the same style as variant='body2'
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam saepe
        magnam illo quas illum minus, aperiam, iusto optio quisquam veniam
        obcaecati quasi libero aspernatur alias quia modi minima excepturi ad.
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, harum
        quam deserunt optio atque illo iste! Qui ullam ut nisi. Porro adipisci
        eius nesciunt excepturi id! Eius nemo asperiores natus?
      </Typography>
    </div>
  )
}

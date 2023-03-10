import { Box, Stack, Grid, Paper, Divider } from '@mui/material'

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '32px' }} elevation={2}>
      // stack by default is display flex and direction columnSpacing
      //spacing 1 = 8px 
      <Stack border='1px solid' spacing={2} direction='row'
      //this will add a vertical devider border
      // divider={<Divider orientation='vertical' flexItem/>}
      >
        <Box
          component='span'
          sx={{
            // primary.main is from theme pallete
            backgroundColor: 'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover': {
              // primary.light is from theme pallete
              backgroundColor: 'primary.light'
            }
          }}>
          Codevolution
        </Box>
        <Box
          display='flex'
          height='100px'
          width='100px'
          //shorthand for backgroundColor
          bgcolor='success.light'
          //shorthand for padding - 1 = 8px - 2 = 2*8px in here
          p={2}
        >
        </Box>
      </Stack>

      <Grid
        rowSpacing={2}
        columnSpacing={1}
        //this is the parent or container of Grid items
        container
        //margin vertical
        my={4}
      >
        <Grid
          // this prop will specify the type of the Grid component to be grid item
          item
          //these sized used for responsive
          //if we dont specify any number for them then they will become auto layout
          //we can set the value to auto too
          //we can set all of them to make them responsive for any sizes
          xs={6}
          sm
          md
          lg
          xl
        >
          <Box p={2} bgcolor='primary.light'>
            Item 1
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Box p={2} bgcolor='primary.light'>
            Item 2
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Box p={2} bgcolor='primary.light'>
            Item 3
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Box p={2} bgcolor='primary.light'>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

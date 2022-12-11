import React from 'react'
import {Card, Typography, CardHeader, Grid} from '@mui/material'

const Works = () => {
return (
  <>
  {/* start of Grid container with spacing to give space between cards */}
    <Grid container spacing={2}>
      {/* start of individual mui grid items each share half the space of 12 so expect 3 rows of 2 cards */}
      <Grid item xs={6}>
        {/* item 1 */}
        <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto'}}>
          <CardHeader>One</CardHeader>
          <Typography>
            one
          </Typography>
        </Card>
      </Grid>

        <Grid item xs={6}>
          {/* item 2 */}
          <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto'}}>
            <CardHeader>Two</CardHeader>
            <Typography>
              two
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={6}>
          {/* item 3 */}
          <Card raised sx={{ marginop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto'}}>
            <CardHeader>Three</CardHeader>
            <Typography>
              Three
            </Typography>
          </Card>
        </Grid>

      <Grid item xs={6}>
        {/* item 4 */}
        <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto'}}>
          <CardHeader>four</CardHeader>
          <Typography>
            four
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={6}>
        {/* item 5 */}
        <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto'}}>
          <CardHeader>five</CardHeader>
          <Typography>
            five
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={6}>
        {/* item 6 */}
        <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto'}}>
          <CardHeader>six</CardHeader>
          <Typography>
            six
          </Typography>
        </Card>
      </Grid>

    </Grid>
  </>
)
}

export default Works
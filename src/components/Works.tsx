import React from 'react'
import {Card, Typography, CardHeader, Grid} from '@mui/material'

//@ts-ignore
import MovingComponent from 'react-moving-text'

const Works = () => {
return (
  <>
  {/* start of Grid container with spacing to give space between cards */}
    <Grid container spacing={2}>
      {/* start of individual mui grid items each share half the space of 12 so expect 3 rows of 2 cards */}
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        {/* item 1 */}
        <MovingComponent
          type="slideInFromLeft"
          duration="700ms"
          delay="0s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="forwards">
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto'}}>
              <CardHeader>One</CardHeader>
              <Typography>
                One
              </Typography>
            </Card>
        </MovingComponent>
      </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          {/* item 2 */}
          <MovingComponent
          type="slideInFromRight"
          duration="700ms"
          delay="0s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="forwards">
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto'}}>
              <CardHeader>Two</CardHeader>
              <Typography>
                Two
              </Typography>
            </Card>
        </MovingComponent>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          {/* item 3 */}
          <MovingComponent
          type="slideInFromLeft"
          duration="700ms"
          delay=".25s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="forwards">
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto'}}>
              <CardHeader>Three</CardHeader>
              <Typography>
                Three
              </Typography>
            </Card>
        </MovingComponent>
        </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        {/* item 4 */}
        <MovingComponent
          type="slideInFromRight"
          duration="700ms"
          delay=".25s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="forwards">
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto'}}>
              <CardHeader>Four</CardHeader>
              <Typography>
                Four
              </Typography>
            </Card>
        </MovingComponent>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        {/* item 5 */}
        <MovingComponent
          type="slideInFromLeft"
          duration="700ms"
          delay=".5s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="forwards">
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto'}}>
              <CardHeader>Five</CardHeader>
              <Typography>
                Five
              </Typography>
            </Card>
        </MovingComponent>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        {/* item 6 */}
        <MovingComponent
          type="slideInFromRight"
          duration="700ms"
          delay=".5s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="forwards">
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto'}}>
              <CardHeader>Six</CardHeader>
              <Typography>
                Six
              </Typography>
            </Card>
        </MovingComponent>
      </Grid>

    </Grid>
  </>
)
}

export default Works
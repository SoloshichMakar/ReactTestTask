import React from 'react';
import { Grid, Box } from '@material-ui/core';

import HomepageComponent from '../HomepageComponent/HomepageComponent';
import SignoutComponent from '../SignoutComponent/SignoutComponent';
import { airportsData } from '../../constants/constants';

import './AirportsPage.css';

function AirportsPage() {
  return (
    <Box className="airport-page">
      <SignoutComponent />
      <h1 className="airport-page__h1">Dashboard</h1>
      <Box className="flights">
        <Grid container>
          <Grid container item>
            {airportsData.map((airport) => (
              <Grid item key={airport.ICAO}>
                <HomepageComponent airport={airport} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AirportsPage;

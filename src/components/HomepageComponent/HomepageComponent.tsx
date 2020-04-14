import React from 'react';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Box, CardContent, Typography, Card, Divider } from '@material-ui/core';

import { flightsApi } from '../../constants/constants';
import { IHomepageProps } from '../../interfaces/interfaces';

import './HomepageComponent.css';
import TableComponent from '../TableComponent/TableComponent';

const HomepageComponent = (props: IHomepageProps) => {
  const [open, setOpen] = React.useState(false);
  const [departingTime, setDepartingTime] = React.useState(30);
  const [arrivingTime, setArrivingTime] = React.useState(30);
  const [arrivingData, setArrivingData] = React.useState([]);
  const [departingData, setDepartingData] = React.useState([]);

  const handleChangeArrivingTime = (time) => {
    setArrivingTime(time);
  };

  const handleChangeDepartingTime = (time) => {
    setDepartingTime(time);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const getArrivingFlights = async () => {
    const unixTimeBegin = Math.floor(Date.now() / 1000) - arrivingTime * 60;
    const unixTimeEnd = Math.floor(Date.now() / 1000);

    const data = await flightsApi.getFlights({
      arriveOrDepart: 'arrival',
      ICAO: props.airport.ICAO,
      begin: unixTimeBegin.toString(),
      end: unixTimeEnd.toString(),
    });

    setArrivingData(data);
  };

  const getDepartingFlights = async () => {
    const unixTimeBegin = Math.floor(Date.now() / 1000) - departingTime * 60;
    const unixTimeEnd = Math.floor(Date.now() / 1000);

    const data = await flightsApi.getFlights({
      arriveOrDepart: 'departure',
      ICAO: props.airport.ICAO,
      begin: unixTimeBegin.toString(),
      end: unixTimeEnd.toString(),
    });

    setDepartingData(data);
  };

  return (
    <Box className="homepage" boxShadow={3}>
      <Card className="airport" onClick={handleOpenModal}>
        <CardContent>
          <Box className="airport__h1">
            <Typography color="textSecondary">City:</Typography>
            <h1>{props.airport.city}</h1>
          </Box>
          <Box className="airport__p">
            <Typography color="textSecondary">Airport:</Typography>
            <p>{props.airport.airportName}</p>
          </Box>
        </CardContent>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="homepage__modal"
        open={open}
        onClose={handleCloseModal}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="homepage__info">
            <Box className="homepage__info-header">
              <h1 className="homepage__h1">{props.airport.city}</h1>
              <h2 className="homepage__h2">{props.airport.airportName}</h2>
            </Box>
            <Box className="homepage__container">
              <Box className="homepage__input-container">
                <Box className="homepage__input">
                  <FormControl className="homepage__form">
                    <InputLabel>
                      Arriving flights in the last x-minutes
                    </InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChangeArrivingTime(e.target.value);
                        getArrivingFlights();
                      }}
                    >
                      <MenuItem value={30}>30 min.</MenuItem>
                      <MenuItem value={60}>1 hour</MenuItem>
                      <MenuItem value={180}>3 hours</MenuItem>
                      <MenuItem value={360}>6 hours</MenuItem>
                      <MenuItem value={540}>9 hours</MenuItem>
                      <MenuItem value={720}>12 hours</MenuItem>
                      <MenuItem value={1440}>24 hours</MenuItem>
                    </Select>
                  </FormControl>
                  <Box className="homepage__table">
                    <h3 className="homepage__h3">Arriving flights</h3>
                    <TableComponent data={arrivingData}></TableComponent>
                  </Box>
                </Box>
                <Divider light />
                <Box className="homepage__input">
                  <FormControl className="homepage__form">
                    <InputLabel>
                      Departing flights in the last x-minutes
                    </InputLabel>
                    <Select
                      onChange={(e) => {
                        handleChangeDepartingTime(e.target.value);
                        getDepartingFlights();
                      }}
                    >
                      <MenuItem value={30}>30 min.</MenuItem>
                      <MenuItem value={60}>1 hour</MenuItem>
                      <MenuItem value={180}>3 hours</MenuItem>
                      <MenuItem value={360}>6 hours</MenuItem>
                      <MenuItem value={540}>9 hours</MenuItem>
                      <MenuItem value={720}>12 hours</MenuItem>
                      <MenuItem value={1440}>24 hours</MenuItem>
                    </Select>
                  </FormControl>

                  <Box className="homepage__table">
                    <h3 className="homepage__h3">Departing flights</h3>
                    <TableComponent data={departingData}></TableComponent>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default HomepageComponent;

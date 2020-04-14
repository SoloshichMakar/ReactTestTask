import React from 'react';
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from '@material-ui/core';
import { ITableProps } from '../../interfaces/interfaces';

import './TableComponent.css';

const TableComponent = (props: ITableProps) => {
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const ConvertUnixTime = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const hours = date.getHours();

    const minutes = '0' + date.getMinutes();

    const seconds = '0' + date.getSeconds();

    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  };

  return (
    <TableContainer component={Paper} className="table">
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ICAO</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Time of departure</TableCell>
            <TableCell align="right">Time of arrival</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.slice(page * 5, page * 5 + 5).map((flight) => (
            <TableRow key={flight.icao24}>
              <TableCell align="right">{flight.icao24}</TableCell>
              <TableCell align="right">{flight.callsign}</TableCell>
              <TableCell align="right">
                {ConvertUnixTime(flight.firstSeen)}
              </TableCell>
              <TableCell align="right">
                {ConvertUnixTime(flight.lastSeen)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={props.data.length}
        rowsPerPage={5}
        page={page}
        onChangePage={handleChangePage}
      />
    </TableContainer>
  );
};

export default TableComponent;

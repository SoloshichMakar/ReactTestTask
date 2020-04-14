import NetworkClient from '../api/networkClient';
import FlightsApi from '../api/flightsApi';

export const airportsData = [
  {
    city: 'Atlanta',
    airportName: 'Hartsfield–Jackson Atlanta International Airport',
    ICAO: 'KATL',
  },
  {
    city: 'Beijing',
    airportName: 'Beijing Capital International Airport',
    ICAO: 'ZBAA',
  },
  {
    city: 'Los Angeles',
    airportName: 'Los Angeles International Airport',
    ICAO: 'KLAX',
  },
  {
    city: 'Dubai',
    airportName: 'Dubai International Airport',
    ICAO: 'OMDB',
  },
  {
    city: 'Chicago',
    airportName: "O'Hare International Airport",
    ICAO: 'KORD',
  },
  {
    city: 'London',
    airportName: 'London Heathrow Airport',
    ICAO: 'EGLL',
  },
  {
    city: 'Shanghai',
    airportName: 'Shanghai Pudong International Airport',
    ICAO: 'ZSPD',
  },
  {
    city: 'Roissy-en-France',
    airportName: 'Charles de Gaulle Airport',
    ICAO: 'LFPG',
  },
  {
    city: 'Dallas',
    airportName: 'Dallas/Fort Worth International Airport',
    ICAO: 'KDFW',
  },
  {
    city: 'Tokyo',
    airportName: 'Tokyo Haneda Airport',
    ICAO: 'RJTT',
  },
];

export const networkClient = new NetworkClient();
export const flightsApi = new FlightsApi(networkClient);

export interface IHomepageProps {
  airport: {
    city: string;
    airportName: string;
    ICAO: string;
  };
}

export interface IFlight {
  icao24: string;
  callsign: string;
  firstSeen: string;
  lastSeen: string;
}

export interface ITableProps {
  data: Array<IFlight>;
}

export interface INetworkClient {
  getRequest: Function;
}

export interface IRequestOptions {
  arriveOrDepart: string;
  ICAO: string;
  begin: string;
  end: string;
}

import { INetworkClient, IRequestOptions } from '../interfaces/interfaces';

export default class FlightsApi {
  networkClient: INetworkClient;

  constructor(netClient: INetworkClient) {
    this.networkClient = netClient;
  }

  getFlights = async (options: IRequestOptions) => {
    const result = await this.networkClient.getRequest(
      `https://opensky-network.org/api/flights/${options.arriveOrDepart}?airport=${options.ICAO}&begin=1517227200&end=1517230800`
    );

    return result;
  };
}

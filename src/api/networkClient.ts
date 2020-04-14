export default class NetworkClient {
  getRequest = async (url: string) => {
    const username = 'newuser';
    const password = '666420renard';
    const headers = new Headers();

    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

    const response = await fetch(url, { headers: headers });

    const data = await response.json();

    return data;
  };
}

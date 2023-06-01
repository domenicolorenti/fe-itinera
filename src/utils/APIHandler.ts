
class APIHandler {

  private serverAddress: string = "192.168.1.151";
  private serverLink: string = `http://${this.serverAddress}:8080`

  async get(url: string) {
    try {
      const response = await fetch(this.serverLink + url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async getWithHeaders(url: string, headers: any) {
    try {
      const response = await fetch(this.serverLink + url, {
        method: 'GET',
        headers: headers
      });
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async post(url: string, body: any) {
    try {
      const response = await fetch(this.serverLink + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

}

export {APIHandler};
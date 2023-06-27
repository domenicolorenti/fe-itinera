import { APIConfig } from "./APIConfig";

class APIManager {


  private static instance: APIManager;

  constructor() {
    if (!APIManager.instance) {
      // Logica per creare l'istanza del singleton
      APIManager.instance = this;
    }

    return APIManager.instance;
  }

  async get(address:string, url: string) {
    const link = address+url;
    try {
      const response = await fetch(link, {
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

  async getWithHeaders(address:string, url: string, headers: any) {
    const link = address+url;
    try {
      const response = await fetch(link, {
        method: 'GET',
        headers: headers
      });
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async post(address:string, url: string, body: any) {
    const link = address+url;
    try {
      const response = await fetch(link, {
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

export {APIManager};
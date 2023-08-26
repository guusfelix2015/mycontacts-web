import delay from "./delay";

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(patch) {
    const response = await fetch(`${this.baseUrl}${patch}`);

    await delay(400);
    return response.json();
  }
}

export default HttpClient;

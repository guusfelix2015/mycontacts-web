import delay from "./delay";
import ApiError from "../errors/ApiError.js";

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(patch) {
    await delay(400);
    const response = await fetch(`${this.baseUrl}${patch}`);

    let body = null;

    const contentType = response.headers.get("Content-Type");
    if (contentType.includes("application/json")) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new ApiError(response, body);
  }
}

export default HttpClient;

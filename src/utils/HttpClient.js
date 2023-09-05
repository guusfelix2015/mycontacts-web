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

  async post(patch, body) {
    await delay(400);

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const response = await fetch(`${this.baseUrl}${patch}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers,
    });

    let responseBody = null;

    const contentType = response.headers.get("Content-Type");
    if (contentType.includes("application/json")) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new ApiError(response, responseBody);
  }
}

export default HttpClient;

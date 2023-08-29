import HttpClient from "../utils/HttpClient";

class ContactsService {
  constructor() {
    this.HttpClient = new HttpClient("http://localhost:3001");
  }

  async listContacts(orderBy = "asc") {
    return this.HttpClient.get(`/contacts/cabcf647-771f-4a31-9871-970504c4c210?orderBy=${orderBy}`);
  }

  async createContacts(contact) {
    return this.HttpClient.post("/contacts", contact);
  }
}

export default new ContactsService();

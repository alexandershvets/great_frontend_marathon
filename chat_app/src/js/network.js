import { ERROR_MESSAGES, RequestError } from './error';

// ws://chat1-341409.oa.r.appspot.com/websockets?TOKEN
class Network {
  constructor() {
    this.url = new URL('https://chat1-341409.oa.r.appspot.com');
    this.endpoints = {
      api: `${this.url.href}api`,
      user: `${this.url.href}api/user`,
      me: `${this.url.href}api/user/me`,
      messages: `${this.url.href}api/messages`,
      socket: `ws://${this.url.host}/websockets`,
    };
  }

  async sendRequest(url, method, { body, token } = {}) {
    const options = {
      method,
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      }
    };
    
    if (method === 'POST' || method === 'PATCH') {
      options.body = JSON.stringify(body);
    }
  
    if (method === 'PATCH' || method === 'GET') {
      options.headers.Authorization = `Bearer ${token}`;
    }
  
    console.log(options);
  
    try {
      const response = await fetch(url, options);
    
      if (!response.ok) {
        throw new RequestError(`${ERROR_MESSAGES.REQUEST_FAIL}: статус: ${response.status}`);
      }
    
      return response.json();
    } catch (err) {
      console.log(err.message);
    }
  }

  async authorizationRequest(email) {
    return await this.sendRequest(this.endpoints.user, 'POST', { body: { email } });
  }

  async settingsRequest(userName, token) {
    return await this.sendRequest(this.endpoints.user, 'PATCH', { body: {name: userName}, token });
  }

  async getUserData(token) {
    return await this.sendRequest(this.endpoints.me, 'GET', { token });
  }

  async getHistoryMessages(token) {
    return await this.sendRequest(this.endpoints.messages, 'GET', { token });
  }
}

const network = new Network();

export {
  network
};
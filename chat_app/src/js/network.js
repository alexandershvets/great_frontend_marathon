import { cookies } from './cookie';
import { ERROR_MESSAGES, RequestError } from './error';

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
    this.socket = undefined;
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

  socketInit(hundlerMessageEvent) {
    const socket = new WebSocket(`${this.endpoints.socket}?${cookies.get(cookies.names.token)}`);
    this.socket = socket;

    this.socket.addEventListener('open', () => {
      this.socket.addEventListener('message', hundlerMessageEvent);
    });

    return socket;
  }

  sendMessageSocket(message) {
    this.socket.send(JSON.stringify({
      text: message,
    }));
  }
}

const network = new Network();

export {
  network
};
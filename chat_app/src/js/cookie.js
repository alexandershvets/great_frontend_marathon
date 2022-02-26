import Cookies from 'js-cookie';

class Cookie {
  constructor() {
    this.names = {
      userId: 'userId',
      token: 'token',
      userName: 'userName'
    };
  }

  set(cookieName, value) {
    Cookies.set(cookieName, value);
  }

  get(cookieName) {
    return Cookies.get(cookieName);
  }
}

const cookies = new Cookie();

export {
  cookies
};
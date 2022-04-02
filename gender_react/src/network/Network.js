
class Network {
  _apiBase = 'https://api.genderize.io';

  async getResource(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
  }

  async getInfo(userName) {
    const result = await this.getResource(`${this._apiBase}?name=${userName}`);

    return this._transformData(result);
  }

  _transformData(data) {
    const { name, gender } = data;

    return {
      name,
      gender
    }
  }
}

export default Network;
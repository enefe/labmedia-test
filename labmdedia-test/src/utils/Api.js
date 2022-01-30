const handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    
    getUsers() {
        return fetch(`${this._url}/users`, {
            method: "GET",
            headers: this._headers
        })
        .then(handleResponse)
    }
}

export const apiUsers = new Api({
    url: 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io',
    headers: {
        'Content-type': 'application/json',
    }
}); 
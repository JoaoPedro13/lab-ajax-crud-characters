class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.instance = axios.create({
      baseURL: `${this.BASE_URL}`
    });
  }

  getFullList () {
    return this.instance.get(`/characters`)
    .then(response => {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
  getOneRegister (id) {
    return this.instance.get(`/characters/${id}`)
    .then(response => Promise.resolve(response.data));
  }

  createOneRegister (data) {
    return this.instance.post('/characters', {
      ...data,
      id: Math.floor(Math.random() * 100000)
    })
    .then(response => Promise.resolve(response.data));
  }

  updateOneRegister (id, data) {
    return this.instance.patch(`/characters/${id}`, data)
    .then(response => Promise.resolve(response.data));
  }

  deleteOneRegister (id) {
    return this.instance.delete(`/characters/${id}`)
    .then(response => Promise.resolve(response.data));
  }
}

import Api from '@/services/api'

export default {
  fetchDevices () {
    return Api().get('/products')
  },
  postDevice (device) {
    return Api().post('/products/addProduct', device,
      {headers: {'Content-type': 'application/json'}})
  },
  upvoteDevice (id) {
    Api().put(`/products/${id}/vote`)
    return Api().get('/products')
  },
  deleteDevice (id) {
    return Api().delete(`/products/delete/${id}`)
  },
  fetchDevice (id) {
    return Api().get(`/products/${id}`)
  },
  putDevice (id, device) { // Need to implement put device
    console.log('REQUESTING ' + device._id + ' ' +
      JSON.stringify(device, null, 5))
    return Api().put(`/products/${id}/edit`, device,
      { headers: {'Content-type': 'application/json'} })
  },
  addUser (user) {
    return Api().post('/useraccounts/addUser', user,
      {headers: {'Content-type': 'application/json'}})
  },
  fetchUsers () {
    return Api().get('/useraccounts')
  }
}

import axios from 'axios';

const api = {
  requestzhData (options) {
    return new Promise((resolve, reject) => {
      axios.get('/v1/news',{params:options})
        .then(data => {
          // console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestggData () {
    return new Promise((resolve, reject) => {
      axios.get('/v1/news?page=1&num=16&target=24')
        .then(data => {
          // console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestssData () {
    return new Promise((resolve, reject) => {
      axios.get('/v1/news?page=1&num=16&target=25')
        .then(data => {
          // console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestglData () {
    return new Promise((resolve, reject) => {
      axios.get('/v1/news?page=1&num=16&target=27')
        .then(data => {
          // console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestsqData () {
    return new Promise((resolve, reject) => {
      axios.get('/v1/news?page=1&num=16&target=28')
        .then(data => {
          // console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default api
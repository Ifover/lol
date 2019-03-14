import ajax from '@/api/axios';

const api = {
  requestqbData (options) {
    return new Promise((resolve, reject) => {
      ajax.get('/v1/fanartdata?page=1&pagesize=8')
        .then(data => {
          // console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requesthzData () {
    return new Promise((resolve, reject) => {
      ajax.get('/v1/fanartdata?page=1&pagesize=8')
        .then(data => {
          // console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestcosData () {
    return new Promise((resolve, reject) => {
      ajax.get('/v1/cos_list')
        .then(data => {
          // console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestweekData () {
    return new Promise((resolve, reject) => {
      ajax.get('/v1//fanart_ranking?d=mzanWeekStatistics')
        .then(data => {
          // console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestmonthData () {
    return new Promise((resolve, reject) => {
      ajax.get('/v1//fanart_ranking?d=mzanMonthStatistics')
        .then(data => {
          // console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requesttjData () {
    return new Promise((resolve, reject) => {
      ajax.get('/v1/fanart_author?d=recommendList&page=1&pagesize=10')
        .then(data => {
          // console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestgcData () {
    return new Promise((resolve, reject) => {
      ajax.get('/v1/fanart_author?d=highProductionList&page=1&pagesize=10')
        .then(data => {
          // console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestrqData () {
    return new Promise((resolve, reject) => {
      ajax.get('/v1/fanart_author?d=popularityList&page=1&pagesize=10')
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
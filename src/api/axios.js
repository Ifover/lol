import axios from 'axios'

let baseUrl = '';


process.env.NODE_ENV === 'development' ? baseUrl = '' : baseUrl = 'http://api.ifover.com';

var ajax = {
    get: (url, obj) => {
        if (!obj) obj = {}
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + url, obj).then(res => resolve(res))
                .catch(err => reject(err))
        })
    }
}


export default ajax
import ajax from '@/api/axios';

const api = {
    requestData(options) {
        return new Promise((resolve, reject) => {
            ajax.get('/v1/news', {params: options})
                .then(data => {
                    // console.log(data)
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
};

export default api
const simulator = require('./simulator')

const config = {
    '/base': [{
        method: 'get',
        responseBody: '{"key": "value"}',
        responseStatus: 200
    }, {
        method: 'post',
        responseBody: '{"key": "post"}',
        responseStatus: 200
    }]
}

simulator(config)

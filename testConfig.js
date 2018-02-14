const simulator = require('./simulator')

const config = {
    '/base': [{
        method: 'get',
        responseBody: '{"key": "value"}',
        responseStatus: 200
    }, {
        method: 'post',
        responseBody: JSON.stringify({key: 'post'}),
        responseStatus: 200
    }],
    '/base/another': {
        method: 'get',
        responseBody: 'nothing here!',
        responseStatus: 204
    }
}

simulator(config, 3000)

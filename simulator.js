const express = require('express')

const simulator = (config, port) => {
    const app = express()

    Object.keys(config).forEach(route => {
        let routeConfig
        if (!Array.isArray(config[route])) {
            routeConfig = [config[route]]
        } else {
            routeConfig = config[route]
        }
        addRoutes(app, route, routeConfig)
    })

    app.listen(port, () => console.log(`Running on port ${port}`))
}

const addRoutes = (app, route, routeConfigs) => {
    routeConfigs.forEach(routeConfig => {
        app[routeConfig.method](route, (req, res) => {
            res.status = routeConfig.responseStatus
            res.send(routeConfig.responseBody)
        })
    })
}

module.exports = simulator
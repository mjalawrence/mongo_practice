const PeopleController = require('../Controllers/PeopleController')

const routes = app => {
    app.get('/yarp', PeopleController.getPeople)
}

module.exports = routes
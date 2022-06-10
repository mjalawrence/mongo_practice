const MongoClient = require('mongodb').MongoClient

const getDb = async () => {
    const url = "mongodb://root:password@localhost:27017"
    const connection = await MongoClient.connect(url)
    return connection.db('students')
}

module.exports.getDb = getDb
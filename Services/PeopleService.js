//CRUD actions go here
//Kinda like a people mode;

const getAllPeople = async (db) => {
    const collection = db.collection('people')
    return collection.find({}).toArray()
}

module.exports.getAllPeople = getAllPeople
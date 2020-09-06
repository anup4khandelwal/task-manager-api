// CRUD
const { MongoClient, ObjectID } = require('mongodb')
// const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log("Unable to connect to database!")
    }
    const db = client.db(databaseName)
//     db.collection('tasks').insertMany([{
//         description: 'Cooking food',
//         completed: true
//     },
//     {
//         description: 'Morning Trading',
//         completed: true
//     },
//     {
//         description: 'Learning',
//         completed: false
//     }
// ], (error, result) => {
//     if(error) {
//         return console.log("Insert document failed!")
//     }
//     console.log(result.ops)
// })
    // db.collection('tasks').findOne({ _id: new ObjectID('5f4a2340799dd60621ec8f94')}, (error, task) => {
    //     if(error) {
    //         return console.log("Unable to fetch task!")
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false}).toArray((error, task) => {
    //     if(error) {
    //         return console.log("No task found!")
    //     }
    //     console.log(task)

    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)   
    // })

    db.collection('tasks').deleteMany(
        { description: 'Cooking food' }
    ).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })
})
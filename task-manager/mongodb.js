// const mongodb = require('mongodb')
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=> {
    if (error) {
        return console.log('Unable to connect too database ', error)
    } 

    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 37
    // }).then( (result) =>  {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log('Error here', error)
    // })

    db.collection('tasks').deleteOne({
        description: 'task 2'
    }).then( (result) =>  {
        console.log(result)
    }).catch((error) => {
        console.log('Error here', error)
    })



    // db.collection('users').updateOne(
    //     {_id: new ObjectID("5d35402c4764349484514701")},
    //     {
    //         $inc: {
    //             age: 3
    //         }
    //     }).then( (result) =>  {console.log(result)})
    //     .catch((error) => {console.log('Error here', error)})

    // db.collection('tasks').updateMany(
    //     {completed: false},
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     }).then( (result) =>  {console.log(result)})
    //     .catch((error) => {console.log('Error here', error)})

    // db.collection('users').findOne({_id: ObjectID("5d354233ca45fe87d4b41e42")}, (error, user) => {
    //     if(error) {
    //         return console.log('Error in searching', error)
    //     }

    //     console.log(user)
    // })

    // db.collection('tasks').findOne({_id: ObjectID("5d3548b316d9d77e70cf5133")}, (error, task) => {
    //     if(error) {
    //         return console.log('Error in searching', error)
    //     }

    //     console.log(task)
    // })



    // db.collection('users').find({age: '37'}).toArray((error, users)=>{
    //     if(error) {
    //         return console.log('Error in searching', error)
    //     }

    //     console.log(users)
    // })

    // db.collection('tasks').find({completed: true}).toArray((error, tasks)=>{
    //     if(error) {
    //         return console.log('Error in searching', error)
    //     }

    //     console.log(tasks)
    // })
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Anril',
    //     age: '42'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })
    
    // db.collection('users').insertMany([
    //     {
    //         name: 'Kapitan',
    //         age: 34
    //     }, {
    //         name: 'Dupa',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)

    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'task 1',
    //         completed: true
    //     }, {
    //         description: 'task 2',
    //         completed: false
    //     }, {
    //         description: 'task 3',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)

    // })

    
})
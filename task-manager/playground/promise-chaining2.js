require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('5d39955726e18375d8afc0fd').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log((e))
// })

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})
    return count
}

deleteTaskAndCount('5d3930e68dd33780bcd420a8', false).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
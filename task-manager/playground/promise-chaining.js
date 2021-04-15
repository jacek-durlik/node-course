require('../src/db/mongoose')
const User = require('../src/models/user')

//ObjectId("5d398e7d77eb046e9cce194d")

// User.findByIdAndUpdate('5d398e7d77eb046e9cce194d', {age: 4}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 4})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log((e))
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5d398e7d77eb046e9cce194d', 5).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
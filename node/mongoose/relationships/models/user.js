const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => {
        console.log('mongo connection open')
    })
    .catch(err => {
        console.log('oh no, mongo connection error')
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: {id: false},
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema)

const makeUser = async() => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 sesame st',
        city: 'new york',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}

const addAddresses = async(id) => {
    const user = await User.findById(id)
    user.addresses.push({
        street: '99 3rd st',
        city: 'new york',
        state: 'NY',
        country: 'USA'
    })
    const res = await user.save()
    console.log(res)
}

addAddresses('6389d9302f0dce9f62192830')
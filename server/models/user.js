import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    type: String, // (“Patient” / “Doctor” / “Admin”)
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    zipcode: String
})

var User = mongoose.model('User', userSchema);

export default User;
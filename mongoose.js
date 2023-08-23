const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/sample', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected successfully');
}).catch((err) => {
    consol.log(err);
})

const student = mongoose.Schema({
    name: String,
    workout: Boolean,
    age:Number
})

const Student = new mongoose.model("Student", student);

const adder = async () => {
    const ss = await Student.create({
        name: "Khushant Rana",
        workout: true,
        age:21
    })
    console.log(ss);
}


adder();




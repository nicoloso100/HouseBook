import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(db => console.log('conecto'))
.catch(err => console.log(err))
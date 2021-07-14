const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Blog',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection ban gayaa hai.");
}).catch((e)=>{
    console.log("Connection nahi bana", e.message);
})
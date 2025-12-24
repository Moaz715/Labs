const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title:{
        type: String,
        
    },
    description: {
        type: String,
        
    },
    instructor:{
        type: String,
        
    },
    price:{
        type: Number,
        
    },
    category:{
        type: String,
        
    },
    StudentsNum:{
        type: Number,
        
    }
})

module.exports = mongoose.model('courses', CourseSchema);
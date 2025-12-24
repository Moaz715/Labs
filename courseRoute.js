const express = require('express');
const router = express.Router();
const Course = require('../lab/courseModel.js');

router.get('/courses', async (req, res)=>{
    const courses = await Course.find();
    res.send(courses);
})

router.post('/courses/add', async (req, res)=>{
    const {title, description} = req.body;
    const course = await Course.create({ title, description });
    res.send(course);

})

router.put('/courses/up/:id', async(req, res)=>{
    const {id} = req.params;
    const {title, description} = req.body;
    const cu = {
        title,
        description
    };
    await Course.findByIdAndUpdate(id, cu, {new:true});
    res.send({message: 'success'});
    
})


router.delete('/courses/:id', async (req, res)=>{
    const {id} = req.params;
    await Course.findByIdAndDelete(id);
    res.send({message: 'success'});
})


module.exports = router;
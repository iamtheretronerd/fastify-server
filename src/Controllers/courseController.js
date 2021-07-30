const Course = require("../models/Course")

exports.getCourse = async (req, reply) => {
    try{
        const courses = await Course.find()
        return courses
    }catch(error){
        throw error
    }
}


exports.getSingleCourse = async (req, reply) => {
    try{
        const courseId = req.params.id
        const course = await Course.findById(courseId)
        return course
    }catch(error){
        throw error
    }
}

//add a new course
exports.addCourse = async (req, reply) => {
    try{
        const course = new Course(req.body)
        return course.save()
    }catch(error){
        throw error
    }
}

//update an existing course
exports.updateCourse = async (req, reply) => {
    try{
        const courseId = req.params.id
        const course = req.body
        const {...updateCourse} = course
        const update = await Course.findByIdAndUpdate(courseId, updateCourse, {new: true})
        return update
    }catch(error){
        throw error
    }
}

//delete existing course

exports.deleteCourse = async(req, reply) => {
    try{
        const courseID = req.params.id
        Course.findByIdAndDelete(courseId)
        return course
    }catch(error){
        throw error
    }
}


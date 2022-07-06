import {v4 as id} from "uuid"
import { courses } from './data.js'



export const getcourses = (req, res) =>{
    res.send(courses)
}

export const addcourse = (req, res) =>{
    const course = req.body
    courses.push({...course, id : id()})
}

export const getcourse = (req, res) =>{
    const singlecourse = courses.filter((course)=>course.id === req.params.id)
    res.send(singlecourse)
}

export const deletecourse = (req, res) =>{
    const course = courses.filter((course)=>course.id !== req.params.id)
    courses.pop(course)
    res.send("course deleted")
}
export const updatecourse = (req, res) =>{
   let course = courses.find((course)=>course.id===req.params.id)

   
   course = req.body
   

   res.send("course updated successfully")
}
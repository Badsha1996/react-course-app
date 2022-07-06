import express from "express"

import { getcourses,addcourse,getcourse,deletecourse, updatecourse} from "../controllers/course.js"

const router = express.Router()

router.get("/courses", getcourses)
router.post("/courses", addcourse)
router.get("/course/:id", getcourse)
router.delete("/course/:id", deletecourse)
router.put("/course/:id", updatecourse)
export default router

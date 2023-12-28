const express = require("express");
const router = express.Router();

let courses = [
  {
    id: 1,
    title: "Spring Boot / Angular",
    price: "350 DT/ Month",
    image: "springBootAngular",
  },
  {
    id: 2,
    title: "Node JS / React",
    price: "350 DT/ Month",
    image: "nodeJSReact",
  },
  {
    id: 3,
    title: "Flutter / Firebase",
    price: "350 DT/ Month",
    image: "flutterFirebase",
  },
  {
    id: 4,
    title: "Business Intelligence",
    price: "350 DT/ Month",
    image: "businessIntelligence",
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    price: "350 DT/ Month",
    image: "artificialIntelligence",
  },
  { id: 6, title: "Devops", price: "350 DT/ Month", image: "devops" },
  {
    id: 7,
    title: "Android",
    price: "350 DT/ Month",
    image:
      "https://admin.appsrhino.com/uploads/What_is_an_Android_App_5b6396c7ee_86ea8f9b74.png",
  },
];

// GET all courses
router.get("/", (req, res) => {
  res.json(courses);
});

// GET a specific course
router.get("/:id", getCourse, (req, res) => {
  res.json(res.course);
});

// CREATE a course
router.post("/", (req, res) => {
  const newCourse = {
    id: courses[courses.length - 1].id + 1,
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
  };

  console.log("Created course:", newCourse);

  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// UPDATE a course
router.put("/:id", (req, res) => {
  const updatedCourse = {
    id: req.params.id,
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
  };

  console.log("Updated course:", updatedCourse);

  const courseIndex = courses.findIndex(
    (course) => course.id === +updatedCourse.id
  );

  courses[courseIndex] = {
    ...courses[courseIndex],
    title: updatedCourse.title,
    price: updatedCourse.price,
    image: updatedCourse.image,
  };

  res.json(courses[courseIndex]);
});

// DELETE a course
router.delete("/:id", getCourse, (req, res) => {
  courses = courses.filter((course) => course.id !== res.course.id);
  res.json({ message: "Course deleted" });
});

function getCourse(req, res, next) {
  const courseId = parseInt(req.params.id);
  const course = courses.find((course) => course.id === courseId);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.course = course;
  next();
}

module.exports = router;

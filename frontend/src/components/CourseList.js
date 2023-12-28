import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

import courseImages from "../data/courseImages";

const images = courseImages;

const CourseList = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the backend
    api
      .get("/courses")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "-25px 0 0 12vw",
        }}
      >
        <h1 style={{ fontSize: "38px" }}>Discover Our Courses</h1>
        {courses.length > 6 && (
          <button
            style={{
              padding: "10px 20px",
              fontSize: "20px",
              padding: "10px 22px",
              marginTop: "10px",
              borderRadius: "20px",
              color: "#fff",
              backgroundColor: "#af2f64",
              border: "none",
              marginRight: "15.5vw",
              cursor: "pointer",
            }}
            onClick={() => navigate("/courses")}
          >
            View More
          </button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "0 100px 0 100px",
        }}
      >
        {courses.slice(0, 6).map((course, index) => (
          <div
            key={course.id}
            style={{ margin: "10px 60px 25px 0px", width: "25%" }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                height: "90%",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <img
                src={
                  course.image.startsWith("http")
                    ? course.image
                    : images[course.image]
                }
                alt={`${course.title} Image`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                }}
              />
              <h1>{course.title}</h1>
              <h3 style={{ color: "#af2f64" }}>{course.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;

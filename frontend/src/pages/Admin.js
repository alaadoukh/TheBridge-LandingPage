import React, { useState, useEffect } from "react";
import api from "../api";
import Loader from "../components/Loader";
import courseImages from "../data/courseImages";

const images = courseImages;

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    price: "",
    image: "",
  });
  const [myCourse, setMyCourse] = useState({
    id: "",
    title: "",
    price: "",
    image: "",
  });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await api.get("/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setMyCourse({ ...myCourse, [name]: value });
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      await api.post("/courses", newCourse);
      setNewCourse({ title: "", price: "", image: "" });
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setMyCourse({
      id: course.id,
      title: course.title,
      price: course.price,
      image: course.image,
    });
  };

  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    if (!selectedCourse) return;

    setMyCourse({ id: selectedCourse.id });
    try {
      await api.put(`/courses/${selectedCourse.id}`, myCourse);
      setSelectedCourse(null);
      setMyCourse({ id: "", title: "", price: "", image: "" });
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await api.delete(`/courses/${courseId}`);
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* Add Course Form */}
      <form onSubmit={handleAddCourse}>
        <h3>Add New Course</h3>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newCourse.title}
            onChange={handleAddInputChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={newCourse.price}
            onChange={handleAddInputChange}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={newCourse.image}
            onChange={handleAddInputChange}
            required
          />
        </div>
        <button type="submit">Add Course</button>
      </form>

      {/* Update Course Form */}
      {selectedCourse && (
        <form onSubmit={handleUpdateCourse}>
          <h3>Edit Course</h3>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={myCourse.title}
              onChange={handleUpdateInputChange}
              required
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={myCourse.price}
              onChange={handleUpdateInputChange}
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="text"
              name="image"
              value={myCourse.image}
              onChange={handleUpdateInputChange}
              required
            />
          </div>
          <button type="submit">Update Course</button>
        </form>
      )}

      {/* Courses Table */}
      <h3>Manage Courses</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.price}</td>
              <td>
                <img
                  src={
                    course.image.startsWith("http")
                      ? course.image
                      : images[course.image]
                  }
                  alt={`${course.title} Image`}
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </td>
              <td>
                <button onClick={() => handleEditCourse(course)}>Edit</button>
                <button onClick={() => handleDeleteCourse(course.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;

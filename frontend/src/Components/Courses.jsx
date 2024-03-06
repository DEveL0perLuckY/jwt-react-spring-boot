import React, { useState, useEffect } from "react";
import { GetLearningContent } from "../Services/CourseDataService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState(null);

  const fetchData = async () => {
    try {
      toast.info("Fetching course data. Please wait..."); // Show loading toast
      const list = await GetLearningContent();
      console.log(list);
      setCourses(list);
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Error fetching courses. Please try again later.");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">List of Courses</h1>
      {courses &&
        courses.map((course) => (
          <div className="card mb-4" key={course.courseId}>
            <div className="card-body">
              <h5 className="card-title">{`Course ${course.courseId} : ${course.courseName}`}</h5>
              <h3 className="card-text">{course.difficultyLevel}</h3>
              <p className="card-text">{course.courseDesc}</p>
              <Link className="btn btn-secondary"> Learn More</Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Courses;

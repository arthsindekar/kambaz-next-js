"use client";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  addCourse,
  deleteCourse,
  updateCourse,
  enrollCourse,
  unenrollCourse,
} from "./reducer";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function Dashboard() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  if (!currentUser || currentUser.username === "") {
    redirect("/Account/Signin");
  }

  const isFaculty = currentUser?.role === "FACULTY";

  const dispatch = useDispatch();
  const { courses, enrollments } = useSelector(
    (state: RootState) => state.dashboardReducer
  );
  const [course, setCourse] = useState({
    name: "",
    description: "",
  });
  const [enrollToggle, setEnrollToggle] = useState(false);

  const handleEnroll = (courseId: string) => {
    const enrollment = {
      _id: uuidv4(),
      user: currentUser._id,
      course: courseId,
    };
    dispatch(enrollCourse(enrollment));
    console.log("enrollment done");
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard </h1> <hr />
      <h3>
        <Form.Check
          type="switch"
          label={enrollToggle ? "All Courses" : "Enrolled Courses"}
          checked={enrollToggle}
          onChange={() => setEnrollToggle(!enrollToggle)}
          
        />
      </h3>
      {isFaculty && (
        <>
          <hr />
          <h5>
            New Course
            <Button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addCourse(course))}
            >
              {" "}
              Add{" "}
            </Button>
            <Button
              className="btn btn-warning float-end me-2"
              id="wd-update-new-course-click"
              onClick={() => dispatch(updateCourse(course))}
            >
              {" "}
              Update{" "}
            </Button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            as="textarea"
            rows={3}
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter((course) =>
              enrollToggle
                ? true
                : enrollments.some(
                    (enrollment) =>
                      enrollment.user === currentUser?._id &&
                      enrollment.course === course._id
                  )
            )
            .map((course) => {
              const isEnrolled = enrollments.some(
                (e) => e.user === currentUser._id && e.course === course._id
              );
              return (
                <Col
                  key={course._id}
                  className="wd-dashboard-course"
                  style={{ width: "300px" }}
                >
                  <Card>
                    <Link
                      href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                      onClick={(e) => {
                        if (!isEnrolled) e.preventDefault();
                      }}
                    >
                      <CardImg
                        src={course.src}
                        variant="top"
                        width="100%"
                        height={160}
                      />
                      <CardBody className="card-body">
                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {course.name}{" "}
                        </CardTitle>

                        <CardText
                          className="wd-dashboard-course-description overflow-hidden"
                          style={{ height: "100px" }}
                        >
                          {course.description}{" "}
                        </CardText>
                        <Button variant="primary"> Go </Button>

                        {isFaculty && (
                          <>
                            <Button
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(deleteCourse(course._id));
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </Button>
                            <Button
                              onClick={(e) => {
                                e.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                              id="wd-edit-course-click"
                            >
                              Edit
                            </Button>
                          </>
                        )}
                      </CardBody>
                    </Link>
                    {isEnrolled ? (
                      <Button
                        className="btn btn-danger"
                        style={{ width: "80px" }}
                        onClick={() => dispatch(unenrollCourse(course._id))}
                      >
                        Uneroll
                      </Button>
                    ) : (
                      <Button
                        className="btn btn-success"
                        style={{ width: "80px" }}
                        onClick={() => handleEnroll(course._id)}
                      >
                        Enroll
                      </Button>
                    )}
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}

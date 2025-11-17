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
import { setCourses, setEnrollments, Enrollment, Courses } from "./reducer";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import * as client from "../Courses/client";

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
    _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
    department: "",
    credits: 0,
    description: "",
    src: "",
  });
  const [enrollToggle, setEnrollToggle] = useState(false);
  const [allCourses, setAllCourses] = useState<Courses[]>([]);

  const handleEnroll = async (courseId: string) => {
    console.log("enrolling....");
    await client.enrollCourse(courseId);
    const newEnrollments = await client.findUserEnrollments();
    dispatch(setEnrollments(newEnrollments));

    const userCourses = await client.findMyCourses();
    dispatch(setCourses(userCourses));

    const allCourses = await client.fetchAllCourses();
    setAllCourses(allCourses);

    console.log("enrollment done");
  };

  const handleUnenroll = async (courseId: string) => {
    console.log("unenrolling...");
    await client.unenrollCourse(courseId);

    const newEnrollments = await client.findUserEnrollments();
    dispatch(setEnrollments(newEnrollments));

    const userCourses = await client.findMyCourses();
    dispatch(setCourses(userCourses));

    const allCourses = await client.fetchAllCourses();
    setAllCourses(allCourses);
    console.log("unenrollment done");
  };

  useEffect(() => {
    const loadData = async () => {
      const userCourses = await client.findMyCourses();
      const allCourses = await client.fetchAllCourses();
      const userEnrollmentsForCourse = await client.findUserEnrollments();
      dispatch(setCourses(userCourses));
      setAllCourses(allCourses);
      dispatch(setEnrollments(userEnrollmentsForCourse));
    };
    if (currentUser?._id) loadData();
  }, []);

  const displayedCourses = enrollToggle ? allCourses : courses;
  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
    const allEnrollments = await client.findAllEnrollments();
    const userEnrollments = allEnrollments.filter(
      (e: Enrollment) => e.user === currentUser._id
    );
    setAllCourses([...allCourses, newCourse]);

    dispatch(setEnrollments(userEnrollments));
  };
  const onDeleteCourse = async (courseId: string) => {
    console.log("deleting course...");
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
    setAllCourses(
      allCourses.filter((course: Courses) => course._id !== courseId)
    );
    console.log("course deleted.");
  };
  const onUpdateCourse = async () => {
    console.log("updating course...");
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    );
    setAllCourses(
      allCourses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    console.log("course updated.");
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
              onClick={onAddNewCourse}
            >
              {" "}
              Add{" "}
            </Button>
            <Button
              className="btn btn-warning float-end me-2"
              id="wd-update-new-course-click"
              onClick={onUpdateCourse}
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
          {displayedCourses.map((course) => {
            const isEnrolled = enrollments.some(
              (e) => e.course === course._id && e.user === currentUser._id
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
                      src={course.src || "/course-default.png"}
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
                              onDeleteCourse(course._id);
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
                      onClick={() => handleUnenroll(course._id)}
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

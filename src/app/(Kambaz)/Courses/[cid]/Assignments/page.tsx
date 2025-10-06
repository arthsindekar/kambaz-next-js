import Link from "next/link";
import {
  Button,
  Col,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { BsGripVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdAssignment } from "react-icons/md";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <Row>
        <Col>
          <InputGroup
            style={{ maxWidth: "300px", height: "45px" }}
            className="mb-3 me-3"
          >
            <InputGroupText className="bg-white">
              <CiSearch />
            </InputGroupText>
            <FormControl className="rounded-end" placeholder={"Search..."} />
          </InputGroup>
        </Col>
        <Col className="d-flex justify-content-end gap-2">
          <Button
            id="wd-add-assignment-group"
            variant="secondary"
            style={{ height: "45px" }}
            className="d-flex align-items-center px-3"
          >
            <FaPlus className="me-2" />
            Group
          </Button>

          <Button
            id="wd-add-assignment"
            variant="danger"
            style={{ height: "45px" }}
            className="d-flex align-items-center px-3"
          >
            <FaPlus className="me-2" />
            Assignment
          </Button>
        </Col>
      </Row>

      <br />
      <br />
      <br />
      <br />

      <Row className="m-2">
        <ListGroup className="rounded-0" id="wd-assignment-list">
          <ListGroupItem className=" p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <div id="wd-assignments-title">
                <BsGripVertical className="me-2 fs-3" />
                ASSIGNMENTS
              </div>{" "}
              <span className="border border-dark rounded-5 p-2">
                40% of Total
              </span>
              <LessonControlButtons />
            </div>

            <ListGroup className="rounded-0">
              <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  <MdAssignment className="me-1 text-success" />
                  A1 - ENV + HTML
                </Link>
                <LessonControlButtons />
                <div className="small mt-1 ps-5">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00am <br />
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </div>
              </ListGroupItem>

              <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  <MdAssignment className="me-1 text-success" />
                  A2 - CSS + Bootstrap
                </Link>{" "}
                <LessonControlButtons />
                <div className="small mt-1 ps-5">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 at 12:00am <br />
                  <b>Due</b> May 20 at 11:59pm | 100 pts
                </div>
              </ListGroupItem>

              <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                >
                  <MdAssignment className="me-1 text-success" />
                  A3 - JAVASCRIPT + REACT
                </Link>{" "}
                <LessonControlButtons />
                <div className="small mt-1 ps-5">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 20 at 12:00am <br />
                  <b>Due</b> May 27 at 11:59pm | 100 pts
                </div>
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
        </ListGroup>
      </Row>

      <Row className="m-2">
        <ListGroup className="rounded-0" id="wd-quizzes">
          <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
            <div className="wd-quiz-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                Quizzes
              </div>{" "}
              <span className="border border-dark rounded-5 p-2">
                10% of Total
              </span>
              <LessonControlButtons />
            </div>
            <ListGroup className="rounded-0">
              <ListGroupItem className="wd-quiz-list-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-quiz-link text-decoration-none text-dark fw-bold"
                >
                  <MdAssignment className="me-1 text-success" />
                  Q1 - ENV + HTML
                </Link>
                <LessonControlButtons />
                <div className="small mt-1 ps-5">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00am <br />
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </div>
              </ListGroupItem>

              <ListGroupItem className="wd-quiz-list-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-quiz-link text-decoration-none text-dark fw-bold"
                >
                  <MdAssignment className="me-1 text-success" />
                  Q2 - CSS + Bootstrap
                </Link>{" "}
                <LessonControlButtons />
                <div className="small mt-1 ps-5">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 at 12:00am <br />
                  <b>Due</b> May 20 at 11:59pm | 100 pts
                </div>
              </ListGroupItem>

              <ListGroupItem className="wd-quiz-list-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-quiz-link text-decoration-none text-dark fw-bold"
                >
                  <MdAssignment className="me-1 text-success" />
                  Q3 - JAVASCRIPT + REACT
                </Link>{" "}
                <LessonControlButtons />
                <div className="small mt-1 ps-5">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 20 at 12:00am <br />
                  <b>Due</b> May 27 at 11:59pm | 100 pts
                </div>
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
        </ListGroup>
      </Row>

      <Row className="m-2">
        <ListGroup className="rounded-0" id="wd-exams-list">
          <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                Exams
              </div>{" "}
              <span className="border border-dark rounded-5 p-2">
                10% of Total
              </span>
              <LessonControlButtons />
            </div>
            <ListGroup className="rounded-0">
              <ListGroupItem className="wd-exams-list-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-exam-link text-decoration-none text-dark fw-bold"
                >
                  <MdAssignment className="me-1 text-success" />
                  Exam1 - ENV + HTML
                </Link>
                <LessonControlButtons />
                <div className="small mt-1 ps-5">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00am <br />
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </div>
              </ListGroupItem>

              <ListGroupItem className="wd-exams-list-item  p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-exams-link text-decoration-none text-dark fw-bold"
                >
                  <MdAssignment className="me-1 text-success" />
                  Exam2 - CSS + Bootstrap
                </Link>{" "}
                <LessonControlButtons />
                <div className="small mt-1 ps-5">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 at 12:00am <br />
                  <b>Due</b> May 20 at 11:59pm | 100 pts
                </div>
              </ListGroupItem>

              <ListGroupItem className="wd-exams-list-item  p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-exams-link text-decoration-none text-dark fw-bold"
                >
                  <MdAssignment className="me-1 text-success" />
                  Exam3 - JAVASCRIPT + REACT
                </Link>{" "}
                <LessonControlButtons />
                <div className="small mt-1 ps-5">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 20 at 12:00am <br />
                  <b>Due</b> May 27 at 11:59pm | 100 pts
                </div>
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
        </ListGroup>
      </Row>

      <Row className="m-2">
        <ListGroup className="rounded-0" id="wd-projects">
          <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                Projects
              </div>{" "}
              <span className="border border-dark rounded-5 p-2">
                15% of Total
              </span>
              <LessonControlButtons />
            </div>
            <ListGroup className="rounded-0">
              <ListGroupItem className="wd-projects p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-project-link text-decoration-none text-dark fw-bold"
                >
                  <MdAssignment className="me-1 text-success" />
                  Projects
                </Link>
                <LessonControlButtons />
                <div className="small mt-1 ps-5">
                  <b>Not available until</b> May 6 at 12:00am <br />
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </div>
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
        </ListGroup>
      </Row>
    </div>
  );
}

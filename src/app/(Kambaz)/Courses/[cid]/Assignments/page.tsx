"use client";
import Link from "next/link";
import * as db from "../../../Database";
import {
  Button,
  Col,
  FormControl,
  FormLabel,
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
import { useParams } from "next/navigation";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <Row>
        <Col>
          <InputGroup className="mb-3 me-3">
            <InputGroupText
              className="bg-white rounded-start"
              style={{ height: "45px", borderRight: "none" }}
            >
              <FormLabel htmlFor="wd-assignments-search">
                <CiSearch className="fs-2 mt-2" />
              </FormLabel>
            </InputGroupText>

            <FormControl
              style={{ maxWidth: "300px", height: "45px", borderLeft: "none" }}
              className="rounded-end"
              id="wd-assignments-search"
              placeholder={"Search..."}
            />
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
              {assignments
                .filter((assignment) => assignment.course === cid)
                .map((assignment) => (
                  <ListGroupItem
                    key={assignment._id}
                    className="wd-assignment-list-item p-3 ps-1"
                  >
                    <BsGripVertical className="me-2 fs-3" />
                    <Link
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link text-decoration-none text-dark fw-bold"
                    >
                      <MdAssignment className="me-1 text-success" />
                      {assignment.title}
                    </Link>
                    <LessonControlButtons />
                    <div className="small mt-1 ps-5">
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <b>Not available until</b> May 6 at 12:00am <br />
                      <b>Due</b> May 13 at 11:59pm | 100 pts
                    </div>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </ListGroupItem>
        </ListGroup>
      </Row>

      
    </div>
  );
}

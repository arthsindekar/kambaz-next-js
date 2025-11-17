"use client";
import Link from "next/link";

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
import { redirect, useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useEffect } from "react";
import * as client from "../../client";
import { setAssignments } from "./assignmentReducer";
export default function Assignments() {
  const { cid } = useParams();
  const aid = "NewAssignment"; // Placeholder for new assignment ID generation logic
  const assignments = useSelector(
    (state: RootState) => state.assignmentReducer.assignments
  );
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: RootState) => state.accountReducer.currentUser
  );
  const isFaculty = currentUser?.role === "FACULTY";
  const fetchAssignments = async () => {
    const fetchedAssignments = await client.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(fetchedAssignments));
  };
  
  useEffect(() => {
    if (!currentUser || currentUser.username === "") {
      alert("User not signed in");
      redirect("/Account/Signin");
    }
    fetchAssignments();
  }, [currentUser]);
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
        {isFaculty && (
          <>
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
                onClick={() => redirect(`/Courses/${cid}/Assignments/${aid}`)}
              >
                <FaPlus className="me-2" />
                Assignment
              </Button>
            </Col>
          </>
        )}
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
              <LessonControlButtons aid="0" />
            </div>

            <ListGroup className="rounded-0">
              {assignments.map((assignment) => (
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
                  <LessonControlButtons aid={assignment._id} />
                  <div className="small mt-1 ps-5">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> {assignment.availableFrom} <br />
                    <b>Due</b> {assignment.dueDate}| {assignment.points} Points
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

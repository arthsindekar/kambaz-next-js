"use client";
import { redirect, useParams } from "next/navigation";

import {
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormCheck,
  FormControl,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import { RootState } from "@/src/app/(Kambaz)/store";
import { useDispatch, useSelector } from "react-redux";
import { use, useEffect, useMemo, useState } from "react";
import { addAssignment, updateAssignment } from "../assignmentReducer";
import router from "next/router";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = useSelector(
    (state: RootState) => state.assignmentReducer.assignments
  );
  const dispatch = useDispatch();
  const defaultAssignment = useMemo(
    () => ({
      _id: "0",
      course: cid as string,
      title: "",
      description: "",
      points: 0,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
    }),
    [cid]
  );
  const [newAssignment, setNewAssignment] = useState(defaultAssignment);

  const isNew = aid === "NewAssignment";
  const assignment = isNew
    ? defaultAssignment
    : assignments.find((a) => a._id === aid) ?? defaultAssignment;
  useEffect(() => {
    setNewAssignment(assignment);
  }, [assignment]);
  const currentUser = useSelector(
    (state: RootState) => state.accountReducer.currentUser
  );
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div id="wd-assignments-editor" className="m-3">
      <div>
        <Row>
          <Col xs={12} md={4} className="fw-bold">
            <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={8}>
            <FormControl
              className=" border-dark"
              id="wd-name"
              placeholder="New Assignment"
              defaultValue={assignment.title}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, title: e.target.value })
              }
              readOnly={!isFaculty}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} md={4} className="fw-bold">
            <FormLabel htmlFor="wd-description">Description</FormLabel>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <FormControl
              rows={10}
              className="mb-3 rounded-0 border-dark"
              as="textarea"
              placeholder="New Description"
              onChange={(e) =>
                setNewAssignment({
                  ...newAssignment,
                  description: e.target.value,
                })
              }
              defaultValue={assignment.description}
              id="wd-description"
              readOnly={!isFaculty}
            ></FormControl>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs={12} md={4} className="text-md-end fw-bold">
            <FormLabel htmlFor="wd-points">Points</FormLabel>
          </Col>
          <Col xs={12} md={4}>
            <FormControl
              readOnly={!isFaculty}
              type="number"
              id="wd-points"
              defaultValue={assignment.points}
              onChange={(e) =>
                setNewAssignment({
                  ...newAssignment,
                  points: Number(e.target.value),
                })
              }
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} md={4} className="text-md-end fw-bold">
            <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
          </Col>
          <Col xs={12} md={4}>
            <FormSelect disabled={!isFaculty} id="wd-group">
              <option defaultValue={assignment.title}>
                {assignment.title}
              </option>
            </FormSelect>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} md={4} className="text-md-end fw-bold">
            <FormLabel htmlFor="wd-display-grade-as">
              Display Grade As
            </FormLabel>
          </Col>
          <Col xs={12} md={4}>
            <FormSelect disabled={!isFaculty} id="wd-display-grade-as">
              <option defaultValue="Percentage">Percentage</option>
              <option value="Points">Points</option>
            </FormSelect>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} md={4} className="fw-bold text-md-end">
            <FormLabel htmlFor="wd-submission-type">Submission Type</FormLabel>
          </Col>
          <Col xs={12} md={4} className="border border-dark rounded p-2 ">
            <FormSelect disabled={!isFaculty} id="wd-submission-type">
              <option defaultValue="Online">Online</option>
              <option value="Offline">Offline</option>
            </FormSelect>
            <br />
            <FormLabel>Online Entry Options</FormLabel>
            <br />
            <FormCheck
              disabled={!isFaculty}
              type="checkbox"
              id="wd-text-entry"
              name="online"
              label="Text Entry"
            />
            <FormCheck
              disabled={!isFaculty}
              type="checkbox"
              id="wd-website-url"
              name="online"
              label="Website URL"
            />
            <FormCheck
              disabled={!isFaculty}
              type="checkbox"
              id="wd-media-recordings"
              name="online"
              label="Media Recordings"
            />
            <FormCheck
              disabled={!isFaculty}
              type="checkbox"
              id="wd-student-annotation"
              name="online"
              label="Student Annotation"
            />
            <FormCheck
              disabled={!isFaculty}
              type="checkbox"
              id="wd-file-upload"
              name="online"
              label="File Upload"
            />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs={12} md={4} className="fw-bold text-md-end">
            <FormLabel htmlFor="wd-assign-to">Assign</FormLabel>
          </Col>
          <Col xs={12} md={4} className="border border-dark rounded p-2 ">
            <FormLabel htmlFor="wd-assign-to">Assign to</FormLabel> <br />
            <FormControl
              type="text"
              id="wd-assign-to"
              defaultValue="Everyone"
              readOnly={!isFaculty}
            />
            <Row className="mt-3">
              <Col xs={12} md={6} className="fw-bold">
                <FormLabel htmlFor="wd-due-date">Due</FormLabel>
              </Col>
              <Col xs={12} md={6}></Col>
              <Col xs={12} md={12}>
                <FormControl
                  readOnly={!isFaculty}
                  type="date"
                  id="wd-due-date"
                  defaultValue={assignment.dueDate}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      description: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={12} md={6} className="fw-bold ">
                <FormLabel htmlFor="wd-available-from">
                  Available From
                </FormLabel>
                <br />
                <FormControl
                  readOnly={!isFaculty}
                  type="date"
                  defaultValue={assignment.availableFrom}
                  id="wd-available-from"
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      availableFrom: e.target.value,
                    })
                  }
                />
              </Col>

              <Col xs={12} md={6} className="fw-bold ">
                <FormLabel htmlFor="wd-available-until">Until</FormLabel>
                <br />
                <FormControl
                  readOnly={!isFaculty}
                  type="date"
                  defaultValue={assignment.availableUntil}
                  id="wd-available-until"
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      availableUntil: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <hr />
      {isFaculty && (
        <>
          <Row>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}>
              <Button
                onClick={() => redirect(`/Courses/${cid}/Assignments`)}
                className="m-2 bg-secondary text-dark border-0"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  if (isNew) dispatch(addAssignment(newAssignment));
                  else
                    dispatch(updateAssignment({ ...newAssignment, _id: aid }));
                  redirect(`/Courses/${cid}/Assignments`);
                }}
                className="m-2 bg-danger text-light border-0"
              >
                Save
              </Button>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}

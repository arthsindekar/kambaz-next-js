"use client";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";
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

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments-editor" className="m-3">
      {assignments
        .filter((assignment) => assignment._id === aid)
        .map((assignment) => (
          <div key={assignment._id}>
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
                  defaultValue={assignment.title}
                />
              </Col>
            </Row>

            <Row className="mt-3 ">
              <Col xs={12} md={8}>
                <FormControl
                  rows={10}
                  className="mb-3 rounded-0 border-dark"
                  as="textarea"
                  defaultValue={`The assignment is available online

                Submit a link to the landing page of your Web application running on Netlify.

                The landing page should include the following:
                > Your full name and section
                > Links to each of the lab assignments
                > Link to the Kanbas application
                > Links to all relevant source code repositories

                The Kanbas application should include a link to navigate back to the landing page.`}
                  id="wd-description"
                ></FormControl>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col xs={12} md={4} className="text-md-end fw-bold">
                <FormLabel htmlFor="wd-points">Points</FormLabel>
              </Col>
              <Col xs={12} md={4}>
                <FormControl type="number" id="wd-points" defaultValue={100} />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={12} md={4} className="text-md-end fw-bold">
                <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
              </Col>
              <Col xs={12} md={4}>
                <FormSelect id="wd-group">
                  <option defaultValue="Assignment1">A1</option>
                  <option value="Assignment2">A2</option>
                  <option value="Assignment3">A3</option>
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
                <FormSelect id="wd-display-grade-as">
                  <option defaultValue="Percentage">Percentage</option>
                  <option value="Points">Points</option>
                </FormSelect>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={12} md={4} className="fw-bold text-md-end">
                <FormLabel htmlFor="wd-submission-type">
                  Submission Type
                </FormLabel>
              </Col>
              <Col xs={12} md={4} className="border border-dark rounded p-2 ">
                <FormSelect id="wd-submission-type">
                  <option defaultValue="Online">Online</option>
                  <option value="Offline">Offline</option>
                </FormSelect>
                <br />
                <FormLabel>Online Entry Options</FormLabel>
                <br />
                <FormCheck
                  type="checkbox"
                  id="wd-text-entry"
                  name="online"
                  label="Text Entry"
                />
                <FormCheck
                  type="checkbox"
                  id="wd-website-url"
                  name="online"
                  label="Website URL"
                />
                <FormCheck
                  type="checkbox"
                  id="wd-media-recordings"
                  name="online"
                  label="Media Recordings"
                />
                <FormCheck
                  type="checkbox"
                  id="wd-student-annotation"
                  name="online"
                  label="Student Annotation"
                />
                <FormCheck
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
                />
                <Row className="mt-3">
                  <Col xs={12} md={6} className="fw-bold">
                    <FormLabel htmlFor="wd-due-date">Due</FormLabel>
                  </Col>
                  <Col xs={12} md={6}></Col>
                  <Col xs={12} md={12}>
                    <FormControl
                      type="date"
                      id="wd-due-date"
                      defaultValue="2024-05-13"
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
                      type="date"
                      defaultValue="2024-05-06"
                      id="wd-available-from"
                    />
                  </Col>

                  <Col xs={12} md={6} className="fw-bold ">
                    <FormLabel htmlFor="wd-available-until">Until</FormLabel>
                    <br />
                    <FormControl
                      type="date"
                      defaultValue="2024-05-20"
                      id="wd-available-until"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        ))}

      <hr />
      <Row>
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={4}>
          <Button href="./" className="m-2 bg-secondary text-dark border-0">
            Cancel
          </Button>
          <Button href="./" className="m-2 bg-danger text-light border-0">
            Save
          </Button>
        </Col>
      </Row>
    </div>
  );
}

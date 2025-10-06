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
  return (
    <div id="wd-assignments-editor" className="m-3">
      <Row>
        <Col xs={12} md={4}>
          <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={5}>
          <FormControl id="wd-name" defaultValue="A1 - ENV + HTML" />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs={12} md={5}>
          <FormControl
            rows={5}
            className="mb-3"
            as="textarea"
            defaultValue="The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page."
            id="wd-description"
          ></FormControl>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs={12} md={2}>
          <FormLabel htmlFor="wd-points">Points</FormLabel>
        </Col>
        <Col xs={12} md={2}>
          <FormControl type="number" id="wd-points" defaultValue={100} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} md={2}>
          <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
        </Col>
        <Col xs={12} md={2}>
          <FormSelect>
            <option defaultValue="Assignment1">A1</option>
            <option value="Assignment2">A2</option>
            <option value="Assignment3">A3</option>
          </FormSelect>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} md={2}>
          <FormLabel htmlFor="wd-display-grade-as">Display Grade As</FormLabel>
        </Col>
        <Col xs={12} md={2}>
          <FormSelect>
            <option defaultValue="Percentage">Percentage</option>
            <option value="Points">Percentage</option>
          </FormSelect>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} md={2} className="me-3">
          <FormLabel htmlFor="wd-group">Submission Type</FormLabel>
        </Col>
        <Col xs={12} sm={6} className="border border-dark rounded p-2 ">
          <FormSelect>
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
        <Col xs={12} md={2}>
          <FormLabel htmlFor="wd-assign-to">Assign</FormLabel>
        </Col>
        <Col xs={12} md={2}>
          <FormLabel htmlFor="wd-assign-to">Assign to</FormLabel> <br />
          <FormControl type="text" id="wd-assign-to" defaultValue="Everyone" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} md={2}>
          <FormLabel htmlFor="wd-due-date">Due</FormLabel>
          <br />
        </Col>
        <Col xs={12} md={2}>
          <FormControl type="date" id="wd-due-date" defaultValue="2024-05-13" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} md={2}>
          <FormLabel htmlFor="wd-available-from">Available From</FormLabel>
          <br />
          <FormControl
            type="date"
            defaultValue="2024-05-06"
            id="wd-available-from"
          />
        </Col>

        <Col xs={12} md={2}>
          <FormLabel htmlFor="wd-available-until">Until</FormLabel>
          <br />
          <FormControl
            type="date"
            defaultValue="2024-05-20"
            id="wd-available-until"
          />
        </Col>
      </Row>

      <hr />
      <Row>
        <Col xs={12} md={4}>
          <Button className="m-2 bg-secondary text-dark border-0">
            Cancel
          </Button>
          <Button className="m-2 bg-danger text-light border-0">Save</Button>
        </Col>
      </Row>
    </div>
  );
}

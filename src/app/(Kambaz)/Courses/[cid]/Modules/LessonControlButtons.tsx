import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "../Assignments/assignmentReducer";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { RootState } from "../../../store";
export default function LessonControlButtons({ aid }: { aid: string }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const handleShow = () => setShow(true);
   const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div className="float-end">
      {isFaculty && aid !== "0" && (
        <FaTrash className="me-2 text-danger" onClick={handleShow} />
      )}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />

      <Modal show={show } onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the assignment ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(deleteAssignment(aid));
              handleClose();
            }}
          >
            {" "}
            OK{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { TbCancel } from "react-icons/tb";
import { useState } from "react";
import ModuleEditor from "./ModuleEditor";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {isFaculty && (
        <>
          <Button
            variant="danger"
            className="m-2 float-end"
            id="wd-add-module-btn"
            onClick={handleShow}
          >
            <FaPlus className="position-relative mb-1" />
            Module
          </Button>
          <Dropdown className="float-end m-2">
            <DropdownToggle variant="secondary" id="wd-publish-all-btn">
              <GreenCheckmark />
              Publish All
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem id="wd-publish-all">
                <GreenCheckmark /> Publish All
              </DropdownItem>
              <DropdownItem id="wd-publish-all-modules-and-items">
                <GreenCheckmark /> Publish all modules and items
              </DropdownItem>
              <DropdownItem id="wd-publish-modules-only">
                <GreenCheckmark /> Publish modules only
              </DropdownItem>
              <DropdownItem id="wd-unpublish-all-modules-and-items">
                <TbCancel /> Unpublish all modules and items
              </DropdownItem>
              <DropdownItem id="wd-unpublish-modules-only">
                <TbCancel /> Unpublish modules only
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Button
            variant="secondary"
            className="m-2 float-end"
            id="wd-view-progress"
          >
            View Progress
          </Button>
        </>
      )}
      <Button
        variant="secondary"
        className="m-2 float-end"
        id="wd-collapse-all"
      >
        Collapse All
      </Button>
      {isFaculty && (
        <>
          <ModuleEditor
            show={show}
            handleClose={handleClose}
            dialogTitle="Add Module"
            moduleName={moduleName}
            setModuleName={setModuleName}
            addModule={addModule}
          />
        </>
      )}
    </div>
  );
}

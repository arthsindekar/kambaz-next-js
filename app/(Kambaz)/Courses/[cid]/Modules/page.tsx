"use client";
import {
  Col,
  FormControl,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
  Module,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import * as client from "../../client";
import { on } from "events";

export default function Modules() {
  const { cid } = useParams() as { cid: string };

  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const currentUser = useSelector(
    (state: RootState) => state.accountReducer.currentUser
  );
  const isFaculty = currentUser?.role === "FACULTY";
  const dispatch = useDispatch();
  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const createdModule = await client.createModuleForCourse(
      cid,
      newModule as Module
    );
    dispatch(setModules([...modules, createdModule]));
  };
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(cid, moduleId);
    dispatch(setModules(modules.filter((m) => m._id !== moduleId)));
  };
  const onUpdateModule = async (module: Module) => {
    await client.updateModule(cid,module);
    const newModules = modules.map((m) => (m._id === module._id ? module : m));
    dispatch(setModules(newModules));
  };

  return (
    <div>
      <Row className="m-2">
        <Col xs={12}>
          <ModulesControls
            setModuleName={setModuleName}
            moduleName={moduleName}
            addModule={onCreateModuleForCourse}
          />
        </Col>
      </Row>
      <br />
      <br />
      <Row className="m-2">
        <ListGroup className="rounded-0" id="wd-modules">
          {modules.map((module) => (
            <ListGroupItem
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        onUpdateModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                {isFaculty && (
                  <>
                    <ModuleControlButtons
                      moduleId={module._id}
                      deleteModule={(moduleId) => {
                        onRemoveModule(moduleId);
                      }}
                      editModule={(moduleId) => dispatch(editModule(moduleId))}
                    />
                  </>
                )}
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson) => (
                    <ListGroupItem
                      key={lesson._id}
                      className="wd-lesson p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                      <LessonControlButtons aid="0" />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Row>
    </div>
  );
}

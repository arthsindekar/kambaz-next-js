import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import {
  FaAlignJustify,
  FaCalendarAlt,
  FaHome,
  FaUserFriends,
} from "react-icons/fa";
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { FaBook, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard, AiOutlinePinterest } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { VscFileSubmodule } from "react-icons/vsc";
import { SiCanvas, SiQuizlet, SiZoom } from "react-icons/si";
import { MdAssignment } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";
import { RxDropdownMenu, RxHamburgerMenu } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";
import { courses } from "../../Database";
import Breadcrumb from "./Breadcrumb";
export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  const course = courses.find((course) => course._id === cid);
  const kambazNav = [
    { label: "Kambaz", path: "/Account", icon: SiCanvas },
    { label: "Account", path: "/Account", icon: FaRegCircleUser },
    { label: "Courses", path: "/Dashboard", icon: FaBook },
    { label: "Calendar", path: "/Calendar", icon: FaCalendarAlt },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: IoMdSettings },
  ];
  const courseNav = [
    {
      label: "Home",
      path: `/Courses/${cid}/Home`,
      id: "wd-course-home-link",
      icon: FaHome,
    },
    {
      label: "Modules",
      path: `/Courses/${cid}/Modules`,
      id: "wd-course-modules-link",
      icon: VscFileSubmodule,
    },
    {
      label: "Piazza",
      path: `/Courses/${cid}/Piazza`,
      id: "wd-course-piazza-link",
      icon: AiOutlinePinterest,
    },
    {
      label: "Zoom",
      path: `/Courses/${cid}/Zoom`,
      id: "wd-course-zoom-link",
      icon: SiZoom,
    },
    {
      label: "Assignments",
      path: `/Courses/${cid}/Assignments`,
      id: "wd-course-assignments-link",
      icon: MdAssignment,
    },
    {
      label: "Quizzes",
      path: `/Courses/${cid}/Quizzes`,
      id: "wd-course-quizzes-link",
      icon: SiQuizlet,
    },
    {
      label: "Grades",
      path: `/Courses/${cid}/Grades`,
      id: "wd-course-grades-link",
      icon: IoBookmarksOutline,
    },
    {
      label: "People",
      path: `/Courses/${cid}/People/Table`,
      id: "wd-course-people-link",
      icon: FaUserFriends,
    },
  ];
  return (
    <div id="wd-courses">
      <div className="d-xs-block d-md-none bg-dark text-white mb-3 rounded-3 p-2">
        <Container className="d-flex justify-content-between align-items-center">
          <Dropdown>
            <DropdownToggle size="lg" variant="dark">
              <RxHamburgerMenu />
            </DropdownToggle>
            <DropdownMenu>
              {kambazNav.map((kambaz) => (
                <DropdownItem
                  key={kambaz.label}
                  className="text-danger"
                  href={kambaz.path}
                >
                  <kambaz.icon className="fs-1 text-danger m-2" />
                  {kambaz.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <div className="text-center flex-grow-1 fw-bold">
            {course?._id} {course?.name}
          </div>

          <Dropdown>
            <DropdownToggle size="lg" id="right-dropdown" variant="dark">
              <CiMenuKebab />
            </DropdownToggle>
            <DropdownMenu className=" rounded-2">
              {courseNav.map((courses) => (
                <DropdownItem
                  key={courses.id}
                  className="text-danger "
                  href={courses.path}
                >
                  <courses.icon className="text-danger fs-1 m-2" />
                  {courses.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Container>
      </div>

      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        <Breadcrumb course={course} />
      </h2>

      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation cid={cid} />
        </div>

        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}

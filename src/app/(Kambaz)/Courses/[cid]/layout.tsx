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
import { SiQuizlet, SiZoom } from "react-icons/si";
import { MdAssignment } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";
import { RxDropdownMenu, RxHamburgerMenu } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";
export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  return (
    <div id="wd-courses">
      <div className="d-xs-block d-md-none bg-dark text-white mb-3 rounded-3">
        <Container className="d-flex justify-content-between align-items-center">
          <Dropdown>
            <DropdownToggle id="left-dropdown" variant="dark">
              <RxHamburgerMenu />
            </DropdownToggle>

            <DropdownMenu>
              <DropdownItem className="text-danger" href="/Account">
                <FaRegCircleUser className="fs-1 text-danger m-2" />
                Account
              </DropdownItem>
              <DropdownItem className="text-danger" href="/Dashboard">
                <AiOutlineDashboard className="fs-1 text-danger m-2" />
                Dashboard
              </DropdownItem>
              <DropdownItem className="text-danger" href="/Dashboard">
                <FaBook className="fs-1 text-danger m-2" />
                Courses
              </DropdownItem>
              <DropdownItem className="text-danger" href="/Calendar">
                <FaCalendarAlt className="fs-1 text-danger m-2" />
                Calendar
              </DropdownItem>
              <DropdownItem className="text-danger" href="/Inbox">
                <FaInbox className="fs-1 text-danger m-2" />
                Inbox
              </DropdownItem>
              <DropdownItem className="text-danger" href="/Labs">
                <IoMdSettings className="fs-1 text-danger m-2" />
                Labs
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div className="text-center flex-grow-1">
            <div className="fw-bold">CS5610 MON/WED</div>
            <div>Modules</div>
          </div>
          <Dropdown className="align-end ">
            <DropdownToggle id="right-dropdown" variant="dark">
              <CiMenuKebab />
            </DropdownToggle>
            <DropdownMenu className=" rounded-2">
              <DropdownItem className="text-danger " href="">
                <FaHome className="text-danger fs-1 m-2" />
                Home
              </DropdownItem>
              <DropdownItem
                className="text-danger"
                href="/Courses/1234/Modules"
              >
                <VscFileSubmodule className="text-danger fs-1 m-2" />
                Modules
              </DropdownItem>
              <DropdownItem className="text-danger" href="/Courses/1234/Piazza">
                <AiOutlinePinterest className="text-danger fs-1 m-2" />
                Piazza
              </DropdownItem>
              <DropdownItem className="text-danger" href="/Courses/1234/Zoom">
                <SiZoom className="text-danger fs-1 m-2" />
                Zoom
              </DropdownItem>
              <DropdownItem
                className="text-danger"
                href="/Courses/1234/Assignments"
              >
                <MdAssignment className="text-danger fs-1 m-2" />
                Assignments
              </DropdownItem>
              <DropdownItem
                className="text-danger"
                href="/Courses/1234/Quizzes"
              >
                <SiQuizlet className="text-danger fs-1 m-2" />
                Quizzes
              </DropdownItem>
              <DropdownItem className="text-danger" href="/Courses/1234/Grades">
                <IoBookmarksOutline className="text-danger fs-1 m-2" />
                Grades
              </DropdownItem>
              <DropdownItem
                className="text-danger"
                href="/Courses/1234/People/Table"
              >
                <FaUserFriends className="text-danger fs-1 m-2" />
                People
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Container>
      </div>
      <h2 className="text-dark">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course {cid}{" "}
      </h2>{" "}
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}

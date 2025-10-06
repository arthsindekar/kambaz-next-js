import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaBook, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
export default function KambazNavigation() {
  
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      <br />
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Account"
          id="wd-account-link"
          className="text-white text-decoration-none"
        >
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>
      </ListGroupItem>
      <br />
      <ListGroupItem className="border-0 bg-white text-center">
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className="text-danger text-decoration-none"
        >
          <AiOutlineDashboard className="fs-1 text-danger" />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>
      <br />
      <ListGroupItem className="border-0 text-center bg-black">
        <Link 
        href="/Dashboard"
        id="wd-courses-link"
        className="text-danger text-decoration-none">
          <FaBook className="fs-1 text-danger"/>
          <br />
          <span className="text-light ">Courses</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 text-center bg-black">
        <Link 
        href="/Calendar"
        id="wd-courses-link"
        className="text-danger text-decoration-none">
          <FaCalendarAlt  className="fs-1 text-danger"/>
          <br />
          <span className="text-light">Calendar</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 text-center bg-black">
        <Link 
        href="/Inbox"
        id="wd-courses-link"
        className="text-danger text-decoration-none">
          <FaInbox  className="fs-1 text-danger"/>
          <br />
          <span className="text-light">Inbox</span>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 text-center bg-black">
        <Link 
        href="/Labs"
        id="wd-courses-link"
        className="text-danger text-decoration-none">
          <IoMdSettings className="fs-1 text-danger"/>
          <br />
          <span className="text-light">Labs</span>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}

"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaBook, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { redirect, usePathname } from "next/navigation";
import { RootState } from "./store";
import { useSelector } from "react-redux";
export default function KambazNavigation() {
  const pathname = usePathname();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];
  const handleClick = (
    e: React.MouseEvent<Element, MouseEvent>,
    link: string
  ) => {
    e.preventDefault();
    const isProtected =
      link.includes("Dashboard") ||
      link.includes("Courses") ||
      link.includes("Calendar") ||
      link.includes("Inbox");
    if (isProtected && currentUser.username !== "") {
      console.log(currentUser.username);
      redirect("/Dashboard");
    } else if (link.includes("Labs")) {
      redirect(link);
    } else {
      console.log("user not signed in");
      alert("Please sign in to access this page");
      return;
    }
  };


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

        <ListGroupItem
          as={Link}
          href="/Account"
          className={`text-center border-0 bg-black ${
            pathname.includes("Account")
              ? "bg-white text-danger"
              : "bg-black text-white"
          }`}
        >
          <FaRegCircleUser
            className={`fs-1 ${
              pathname.includes("Account") ? "text-danger" : "text-white"
            }`}
          />
          <br />
          Account
        </ListGroupItem>

        {links.map((link, index) => (
          <ListGroupItem
            key={index}
            onClick={(e) => handleClick(e, link.path)}
            className={`bg-black text-center border-0 ${
              pathname.includes(link.label)
                ? "text-danger bg-white"
                : "text-white bg-black"
            }`}
          >
            {link.icon({ className: "fs-1 text-danger" })}
            <br />
            {link.label}
          </ListGroupItem>
        ))}
      </ListGroup>
    );



  // return ( {showKambazNav}
  //   <ListGroup
  //     className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
  //     style={{ width: 110 }}
  //     id="wd-kambaz-navigation"
  //   >
  //     <ListGroupItem
  //       className="bg-black border-0 text-center"
  //       as="a"
  //       target="_blank"
  //       href="https://www.northeastern.edu/"
  //       id="wd-neu-link"
  //     >
  //       <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
  //     </ListGroupItem>
  //     <br />
  //     <ListGroupItem
  //       as={Link}
  //       href="/Account"
  //       className={`text-center border-0 bg-black ${
  //         pathname.includes("Account")
  //           ? "bg-white text-danger"
  //           : "bg-black text-white"
  //       }`}
  //     >
  //       <FaRegCircleUser
  //         className={`fs-1 ${
  //           pathname.includes("Account") ? "text-danger" : "text-white"
  //         }`}
  //       />
  //       <br />
  //       Account
  //     </ListGroupItem>
  //     {links.map((link, index) => (
  //       <ListGroupItem
  //         key={index}
  //         onClick={(e) => handleClick(e, link.path)}
  //         className={`bg-black text-center border-0 ${
  //           pathname.includes(link.label)
  //             ? "text-danger bg-white"
  //             : "text-white bg-black"
  //         }`}
  //       >
  //         {link.icon({ className: "fs-1 text-danger" })}
  //         <br />
  //         {link.label}
  //       </ListGroupItem>
  //     ))}
  //   </ListGroup>
  // );
}

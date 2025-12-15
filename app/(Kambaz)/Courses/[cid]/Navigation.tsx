"use client";
import { useParams, usePathname } from "next/navigation";
import { redirect } from "next/navigation";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Link from "next/link";
export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const showCourseNav = useSelector(
    (state: RootState) => state.dashboardReducer.showCourseNav
  );
  const links = [
    { label: "Home", path: `/Courses/${cid}/Home`, id: "wd-course-home-link" },
    {
      label: "Modules",
      path: `/Courses/${cid}/Modules`,
      id: "wd-course-modules-link",
    },
    {
      label: "Pazza",
      path: `/Courses/${cid}/Pazza`,
      id: "wd-course-piazza-link",
    },
    { label: "Zoom", path: `/Courses/${cid}/Zoom`, id: "wd-course-zoom-link" },
    {
      label: "Assignments",
      path: `/Courses/${cid}/Assignments`,
      id: "wd-course-assignments-link",
    },
    {
      label: "Quizzes",
      path: `/Courses/${cid}/Quizzes`,
      id: "wd-course-quizzes-link",
    },
    {
      label: "Grades",
      path: `/Courses/${cid}/Grades`,
      id: "wd-course-grades-link",
    },
    {
      label: "People",
      path: `/Courses/${cid}/People/Table`,
      id: "wd-course-people-link",
    },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {showCourseNav && links.map((link) => (
        <Link
          key={link.id}
          id={link.id}
          className={`list-group-item border-0 ${
            pathname.includes(link.label) ? "active" : "text-danger"
          }`}
          href={link.path}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

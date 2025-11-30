"use client";

import { Users } from "@/src/app/(Kambaz)/Account/client";
import { useParams, usePathname } from "next/navigation";
import PeopleDetails from "../Details";
import * as client from "../../../client";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { RootState } from "@/src/app/(Kambaz)/store";
import { useSelector } from "react-redux";

export default function PeopleTable({
  users = [],
  fetchUsers,
}: {
  users?: Users[];
  fetchUsers: () => void;
}) {
  console.log(JSON.stringify(users));
  
  const [localUsers, setUsers] = useState<Users[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);
  const pathname = usePathname();
  const { cid } = useParams();
  const isCoursePeoplePage =
    pathname.includes("Courses") && pathname.includes("People");

  useEffect(() => {
    async function loadCourseUsers() {
      if (isCoursePeoplePage && cid) {
        const courseUsers = await client.findUsersForCourse(cid as string);
        setUsers(courseUsers);
      } else {
        setUsers(users);
      }
    }
    loadCourseUsers();
  }, [cid, cid ? null : users]);

  
  return (
    <div id="wd-people-table">
      {showDetails && (
        <PeopleDetails
          uid={showUserId}
          onClose={() => {
            setShowDetails(false);
            if (!isCoursePeoplePage) fetchUsers();
          }}
        />
      )}
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {localUsers.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <span
                  className="text-decoration-none"
                  onClick={() => {
                    setShowDetails(true);
                    setShowUserId(user._id);
                  }}
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>
                  <span className="wd-last-name"> {user.lastName}</span>
                </span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { NavLink } from "react-bootstrap";
export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  const pathname = usePathname();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {!currentUser && (
        <>
          <Link
            href="Signin"
            className={` list-group-item border-0 text-danger text-decoration-none ${
              pathname.includes("Signin") ? "active text-dark" : ""
            }`}
          >
            {" "}
            Signin{" "}
          </Link>{" "}
          <Link
            className={` list-group-item border-0 text-danger text-decoration-none ${
              pathname.includes("Signup") ? "active text-dark" : ""
            }`}
            href="Signup"
          >
            {" "}
            Signup{" "}
          </Link>{" "}
        </>
      )}
      {currentUser && (
        <>
          <Link
            className={` list-group-item border-0 text-danger text-decoration-none ${
              pathname.includes("Profile") ? "active text-dark" : ""
            }`}
            href="Profile"
          >
            {" "}
            Profile{" "}
          </Link>{" "}
          {currentUser && currentUser.role === "ADMIN" && (
            <NavLink
              as={Link}
              href={`/Account/Users`}
              className={` list-group-item border-0 text-danger text-decoration-none ${
              pathname.includes("Users") ? "active text-dark" : ""
            }`}
            >
              {" "}
              Users{" "}
            </NavLink>
          )}
        </>
      )}
    </div>
  );
}

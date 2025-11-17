"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useSelector } from "react-redux";
import { RootState } from "../store";
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
        </>
      )}
    </div>
  );
}

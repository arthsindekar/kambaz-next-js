"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
export default function AccountNavigation() {
  const pathname = usePathname();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
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
      <Link
        className={` list-group-item border-0 text-danger text-decoration-none ${
          pathname.includes("Profile") ? "active text-dark" : ""
        }`}
        href="Profile"
      >
        {" "}
        Profile{" "}
      </Link>{" "}
    </div>
  );
}

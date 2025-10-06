import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <FormControl
        placeholder="username"
        className="mb-2"
        defaultValue={"alice"}
      />
      <br />
      <FormControl
        id="wd-password"
        placeholder="password"
        defaultValue={"alice"}
        type="password"
        className="wd-password"
      />
      <br />

      <FormControl
        placeholder="verify password"
        type="password"
        className="wd-password-verify"
         defaultValue={"alice"}
      />
      <br />
      <Link href="Profile" className="btn btn-primary w-100 mb-2">
        {" "}
        Sign up{" "}
      </Link>
      <br />
      <Link href="Signin"> Sign in </Link>
    </div>

 
  );
}

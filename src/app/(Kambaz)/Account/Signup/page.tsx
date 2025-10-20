import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <FormControl
        placeholder="username"
        className="mb-2 w-25"
        defaultValue={"alice"}
      />
      <br />
      <FormControl
        id="wd-password"
        placeholder="password"
        defaultValue={"alice"}
        type="password"
        className="wd-password w-25"
      />
      <br />

      <FormControl
        placeholder="verify password"
        type="password"
        className="wd-password-verify w-25"
         defaultValue={"alice"}
      />
      <br />
      <Link href="Profile" className="btn btn-primary w-25 mb-2">
        {" "}
        Sign up{" "}
      </Link>
      <br />
      <Link href="Signin"> Sign in </Link>
    </div>

 
  );
}

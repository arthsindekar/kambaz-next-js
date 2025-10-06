import Link from "next/link";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormControl,
  FormSelect,
} from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl
        defaultValue="alice"
        placeholder="username"
        className="wd-username"
      />
      <br />
      <FormControl
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password"
      />
      <br />
      <FormControl
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
      />
      <br />
      <FormControl
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
      />
      <br />
      <FormControl defaultValue="2000-01-01" type="date" id="wd-dob" />
      <br />
      <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" />
      <br />
      <FormSelect>
        <option value="User">User</option>
        <option defaultValue="Faculty" >Faculty</option>
        <option value="Student">Student</option>
      </FormSelect>

      <br />
      <Link href="Signin" className="btn btn-danger  mb-2">
        {" "}
        Sign out{" "}
      </Link>
    </div>
  );
}

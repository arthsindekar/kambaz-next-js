"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormControl,
  FormSelect,
} from "react-bootstrap";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { setCurrentUser } from "../reducer";
export default function Profile() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  const [profile, setProfile] = useState<typeof currentUser>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    dob: "",
  });

  const dispatch = useDispatch();
  const signout = () => {
    dispatch(setCurrentUser({
      username:""
    }))
    redirect("Signin");
  };
  const fetchProfile = () => {
    if (currentUser.username === "") return redirect("Signin");
    setProfile(currentUser);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <>
          <FormControl
            defaultValue={profile.username}
            placeholder="username"
            className="wd-username w-25"
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <br />
          <FormControl
            defaultValue={profile.password}
            placeholder="password"
            type="password"
            className="wd-password w-25"
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <br />
          <FormControl
            defaultValue={profile.firstName}
            placeholder="First Name"
            id="wd-firstname"
            className="w-25"
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <br />
          <FormControl
            defaultValue={profile.lastName}
            placeholder="Last Name"
            id="wd-lastname"
            className="w-25"
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <br />
          <FormControl
            className="w-25"
            defaultValue={profile.dob}
            type="date"
            id="wd-dob"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <br />
          <FormControl
            className="w-25"
            defaultValue={profile.email}
            type="email"
            id="wd-email"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <br />
          <FormSelect
            className="w-25"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </FormSelect>

          <br />
          <Button onClick={signout} className="btn btn-danger  mb-2">
            {" "}
            Sign out{" "}
          </Button>
        </>
      )}
    </div>
  );
}

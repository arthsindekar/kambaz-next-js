"use client";
import { Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import * as client from "../client";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Signin() {
  type Credentials = {
    username: string;
    password: string;
  };
  const [credentials, setCredentials] = useState<Credentials>(
    {} as Credentials
  );
  const dispatch = useDispatch();

  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) redirect("/");
    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        id="wd-username"
        placeholder="username"
        className="mb-2 w-25"
      />
      <br />
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2 w-25"
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <br />
      <Button
        id="wd-signin-btn"
        onClick={signin}
        className="btn btn-primary w-25 mb-2"
      >
        Sign in{" "}
      </Button>
      <br />
      <Link id="wd-signup-link" href="/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}

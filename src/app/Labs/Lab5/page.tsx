"use client"
import Link from "next/link";
import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <Link href="https://kambaz-node-server-app-0wxv.onrender.com">SERVER URL</Link>
      <div className="list-group">
        <a href={`${HTTP_SERVER}/lab5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <hr />
      <EnvironmentVariables />
      <PathParameters/>
      <QueryParameters/>
      <WorkingWithObjects/>
      <WorkingWithArrays/>
      <HttpClient/>
      <WorkingWithObjectsAsynchronously/>
      <WorkingWithArraysAsynchronously/>
    </div>
  );
}

import Link from "next/link";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Arth Sindekar</h1>
      <h3>Section:04</h3>
      <h3>CRN: 18616 </h3>
      <h3>Links:</h3>
      <ul>
        <li>
          <Link href="https://github.com/arthsindekar/kambaz-next-js">GitHub Source Code Link</Link>
        </li>
        <li>
          <Link href="/">Click Here for Kambaz App</Link>
        </li>
      </ul>
      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
      </ul>
    </div>
  );
}

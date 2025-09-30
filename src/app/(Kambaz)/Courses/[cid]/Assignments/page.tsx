import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>{" "} <br />
          Multiple Modules|<b> Not available until</b> May 6 at 12:00am |<br />
          <b>Due</b> May 13 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A2 - CSS + Bootstrap
          </Link>{" "} <br />
          Multiple Modules|<b> Not available until</b> May 13 at 12:00am |<br />
          <b>Due</b> May 20 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </Link>{" "} <br />
          Multiple Modules|<b> Not available until</b> May 20 at 12:00am |<br />
          <b>Due</b> May 27 at 11:59pm | 100 pts
        </li>

      </ul>
      <h3 id="wd-assignment-title">
        Quizzes  <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            Quiz1- ENV +HTML
          </Link>{" "} <br />
          Multiple Modules|<b> Not available until</b> May 6 at 12:00am |<br />
          <b>Due</b> May 13 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-quizzes-link"
          >
            Quiz2 - CSS + Bootstrap
          </Link>{" "} <br />
          Multiple Modules|<b> Not available until</b> May 13 at 12:00am |<br />
          <b>Due</b> May 20 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            Quiz3 - JAVASCRIPT + REACT
          </Link>{" "} <br />
          Multiple Modules|<b> Not available until</b> May 20 at 12:00am |<br />
          <b>Due</b> May 27 at 11:59pm | 100 pts
        </li>

      </ul>

      <h3 id="wd-assignment-title">
        Projects  <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            Project
          </Link>{" "} <br />
          <b> Not available until</b> May 6 at 12:00am |<br />
          <b>Due</b> Dec 13 at 11:59pm | 100 pts
        </li>
      </ul>

      <h3 id="wd-assignment-title">
        Exams  <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            Exam1- ENV +HTML
          </Link>{" "} <br />
          Multiple Modules|<b> Not available until</b> May 6 at 12:00am |<br />
          <b>Due</b> May 13 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-quizzes-link"
          >
            Exam2 - CSS + Bootstrap
          </Link>{" "} <br />
          Multiple Modules|<b> Not available until</b> May 13 at 12:00am |<br />
          <b>Due</b> May 20 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            Exam3 - JAVASCRIPT + REACT
          </Link>{" "} <br />
          Multiple Modules|<b> Not available until</b> May 20 at 12:00am |<br />
          <b>Due</b> May 27 at 11:59pm | 100 pts
        </li>

      </ul>

      
    </div>
  );
}

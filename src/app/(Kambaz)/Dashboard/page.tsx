import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1235" className="wd-dashboard-course-link">
            <Image src="/images/pdp.jpg" width={200} height={150} />
            <div>
              <h5> CS1235 PDP </h5>
              <p className="wd-dashboard-course-title">
                Program design Paradigm{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1236" className="wd-dashboard-course-link">
            <Image src="/images/dbms.jpg" width={200} height={150} />
            <div>
              <h5> CS1236 DBMS </h5>
              <p className="wd-dashboard-course-title">
                Database Management Systems{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1237" className="wd-dashboard-course-link">
            <Image src="/images/algorithms.jpg" width={200} height={150} />
            <div>
              <h5> CS1237 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Algorithms{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1238" className="wd-dashboard-course-link">
            <Image src="/images/fai.jpg" width={200} height={150} />
            <div>
              <h5> CS1238 F AI </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Artificial Intelligence{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1238" className="wd-dashboard-course-link">
            <Image src="/images/cs.jpg" width={200} height={150} />
            <div>
              <h5> CS1238 CS </h5>
              <p className="wd-dashboard-course-title">
                Computer Systems{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1239" className="wd-dashboard-course-link">
            <Image src="/images/cloud.jpg" width={200} height={150} />
            <div>
              <h5> CS1239 Cloud Computing </h5>
              <p className="wd-dashboard-course-title">
                Cloud Engineer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1240" className="wd-dashboard-course-link">
            <Image src="/images/ml.jpg" width={200} height={150} />
            <div>
              <h5> CS1240 ML </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

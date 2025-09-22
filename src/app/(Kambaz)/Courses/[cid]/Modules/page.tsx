export default function Modules() {
  return (
    <div>
      <button>Collapse All</button>
      <button>View Progress</button>
      <select defaultValue={"Publish All"}>
        <option value="Publish All">Publish All</option>
      </select>
      <button>+ Modules</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
                <li>Learn about HTML and CSS</li>
              </ul>
            </li>

            <li>
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">FullStack Developer Chapter 1- Introduction</li>
                <li className="wd-content-item">
                  FullStack Developer Chapter 2- Creating User
                </li>
                <li>Learn about HTML and CSS</li>
              </ul>
            </li>
             <li>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Intro to Web Dev</li>
                <li className="wd-content-item">
                  Creating an http server
                </li>
                <li>Creating a react app</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learning CSS</li>
                <li className="wd-content-item">
                  Learn what is JS
                </li>
                <li>Learn about HTML and CSS and JS working together</li>
              </ul>
            </li>

            <li>
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">FullStack Developer Chapter 3- CSS</li>
                <li className="wd-content-item">
                  FullStack Developer Chapter 4- Adding styles
                </li>
                <li>Learn about JS</li>
              </ul>
            </li>
             <li>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Intro to CSS</li>
                <li className="wd-content-item">
                  Creating an JS function
                </li>
                <li>Learning next JS</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learning NextJS</li>
                <li className="wd-content-item">
                  Learn what is NextJS server
                </li>
                <li>Learn about server side render</li>
              </ul>
            </li>

            <li>
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">FullStack Developer Chapter 4- NextJS</li>
                <li className="wd-content-item">
                  FullStack Developer Chapter 5- Adding components to nextJS
                </li>
                <li>Learn about NextJS</li>
              </ul>
            </li>
             <li>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Intro to NextJS</li>
                <li className="wd-content-item">
                  Creating an NextJS function and exporting it.
                </li>
                <li>Learning next NextJS</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

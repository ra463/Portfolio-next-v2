"use client";
import React, { useState } from "react";
import "./Experience.scss";

const Experience = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="experience">
      <div className="experience_inner">
        <span>2.</span>
        <h2>My Experience</h2>
        <p></p>
      </div>
      <div className="exp_div">
        <div className="roles">
          <button
            onClick={() => setActive(0)}
            className={`${active === 0 ? "active" : ""}`}
          >
            <span>Bhumi</span>
          </button>
          <button
            onClick={() => setActive(2)}
            className={`${active === 2 ? "active" : ""}`}
          >
            <span> Kenvent IT</span>
          </button>
          <button
            onClick={() => setActive(1)}
            className={`${active === 1 ? "active" : ""}`}
          >
            <span>QuantumIT Innovation</span>
          </button>
        </div>
        <div className="roles_responsive">
          <button
            onClick={() => setActive(0)}
            className={`${active === 0 ? "active" : ""}`}
          >
            <span>Bhumi</span>
          </button>
          <button
            onClick={() => setActive(2)}
            className={`${active === 2 ? "active" : ""}`}
          >
            <span> Kenvent IT</span>
          </button>
          <button
            onClick={() => setActive(1)}
            className={`${active === 1 ? "active" : ""}`}
          >
            <span>QuantumIT Innovation</span>
          </button>
        </div>
        <div className="position">
          {active === 0 && (
            <div className="container">
              <div className="head">
                <div className="first">
                  <h3>Youth Volunteer</h3>
                  <a href="https://bhumi.ngo">
                    <p>@</p>
                    <p>Bhumi</p>
                  </a>
                </div>
                <div className="second">
                  <span>April 2021</span> <span>-</span> <span>May 2021</span>
                </div>
              </div>
              <div className="desc">
                <ol>
                  <li>
                    <div>•</div>
                    <div>
                      Bhumi is one of India's largest independent and youth
                      volunteer <span>non-profit organization</span>.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Attending orientation to know more about COVID,{" "}
                      <span>COVID vaccination</span>, myths, and facts around
                      the same.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      The content can cover any <span>thematic area</span>{" "}
                      including the need to get vaccinated myths and facts
                      around COVID vaccination and/or process to{" "}
                      <span>register</span> and get vaccinated.
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          )}
          {active === 2 && (
            <div className="container">
              <div className="head">
                <div className="first">
                  <h3>FrontEnd Developer</h3>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://kenvent.in/"
                  >
                    <p>@</p>
                    <p>Kenvent IT</p>
                  </a>
                </div>
                <div className="second">
                  <span>January 2022</span> <span>-</span>{" "}
                  <span>February 2022</span>
                </div>
              </div>
              <div className="desc">
                <ol>
                  <li>
                    <div>•</div>
                    <div>
                      Kenvent Services is one of the best{" "}
                      <span>website design</span> development companies in{" "}
                      <span>India</span>.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Work using HTML, CSS, JS, understanding of{" "}
                      <span>responsive web design</span> and on-page SEO.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Work on completing the <span>task</span> in the given time
                      frame.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Handle the <span>updation</span> of the work each day.
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          )}
          {active === 1 && (
            <div className="container">
              <div className="head">
                <div className="first">
                  <h3>Fullstack Intern</h3>
                  <a
                    className="first_a"
                    href="https://quantumitinnovation.com/"
                  >
                    <p>@</p>
                    <p>QuantumIT Innovation</p>
                  </a>
                </div>
                <div className="second">
                  <span>September 2023</span> <span>-</span>{" "}
                  <span>Ongoing</span>
                </div>
              </div>
              <div className="desc">
                <ol>
                  <li>
                    <div>•</div>
                    <div>
                      Participate in the design and development of various{" "}
                      <span>web-based</span> applications using
                      <span>ReactJS</span>,<span> Node.js</span>,
                      <span> JavaScript</span> , and other relevant programming
                      languages.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Develop new user-facing features using{" "}
                      <span>ReactJS</span>.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Work on <span>NodeJS</span>,<span>ExpressJS</span> and
                      creating <span>RESTful APLs</span> in Backend.
                    </div>
                  </li>
                  <li>
                    <div>•</div>
                    <div>
                      Work on <span>Redux</span>,<span>React hooks</span>,
                      <span>state Management</span>, and React component
                      lifecycle.
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;

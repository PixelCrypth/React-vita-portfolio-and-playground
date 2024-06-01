// src/components/AboutMe.jsx
import React from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const AboutMe = () => {
    return (
        <div>
            <div className="About-me-div">
                <h3>About Me</h3>
                <p className="about-me-text">
                    Hello! I'm Ryan, a passionate web developer with several years of
                    experience in building web applications. <br></br>I'm
                    enthusiastic about learning new technologies and making creative
                    projects.
                </p>
            </div>
            <div className="About-me-div">
                <h3>Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="About-me-div">
                <h3>Worked with</h3>
                <ul>
                    <li>Web Development</li>
                    <li>Laravel</li>
                    <li>Html</li>
                    <li>C#</li>
                    <li>Typescript</li>
                    <li>Flutter</li>
                    <li>
                        Creating Unity Projects
                    </li>
                    <li>Lua</li>
                    <li>
                        <a
                            href="https://create.roblox.com/talent/creators/10857371"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Creating Roblox Games
                        </a>
                    </li>
                    <li>Microsoft Word</li>
                    <li>Microsoft Powerpoint</li>
                    <li>Microsoft Excel</li>
                    <li>Customer Support Service</li>
                    <li>Computer Hardware</li>
                    <li>Javascript</li>
                    <li>
                        <a
                            href="https://github.com/PixelCrypth/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </li>
                </ul>
            </div>
            <div className="About-me-div">
                <h3>Language</h3>
                <ul>
                    <li>Dutch (Write and speak)</li>
                    <li>English (Write and speak)</li>
                </ul>
            </div>
            <div className="About-me-div">
                <h3>Education</h3>
                <ul>
                    <li>Mbo level 4, Software Developer (full-time)</li>
                    <li>Mbo level 3, ICT Employee (full-time)</li>
                    <li>Mbo level 2, Employee (Financial) Administration (full-time)</li>
                    <li>Vmbo, Basic Vocational (Financial) Education</li>
                </ul>
            </div>
            <div className="About-me-div">
                <h3>Interests</h3>
                <ul>
                    <li>Web Development</li>
                    <li>
                        <a
                            href="https://steamcommunity.com/id/lordryan112/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Video Games
                        </a>
                    </li>
                    <li>Music</li>
                </ul>
            </div>
            <div className="About-me-div">
                <h3>Contact</h3>
                <ul>
                    <li>
                        Currently hidden due to privacy reasons.

                    </li>
                </ul>
            </div>
            <div className="About-me-div">
                <h3>Favorite Resources</h3>
                <ul>
                    <li>
                        <a
                            href="https://react.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://vitejs.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vite
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.w3schools.com/css/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            w3schools - CSS
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://laravel.com/docs/8.x/eloquent-relationships#one-to-many"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Laravel - One to many relationship
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://laravel.com/docs/8.x/eloquent-relationships#many-to-many"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Laravel - Many to many relationship
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://chatgpt.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ChatGPT
                        </a>
                    </li>
                </ul>
            </div>
            <div className="About-me-div">
                <h3>Github - repositories</h3>
                <ul>
                    <li>
                        <a
                            href="https://github.com/ps168245?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            School account - Software developer - niveau 4
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/PixelCrypth?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Personal account
                        </a>
                    </li>

                </ul>
            </div>
            <div className="About-me-div">
                <h3>Social Media</h3>
                <ul>
                    <li>
                        <a
                            href="https://github.com/PixelCrypth"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>

                </ul>
            </div>
            <div className="About-me-div">
                <p>Click on the Vite and React logos to learn more</p>
                <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
